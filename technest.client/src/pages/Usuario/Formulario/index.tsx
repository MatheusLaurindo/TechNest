/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UsuarioService } from "../../../service";
import { IForm, setForm } from "../../../store/usuario";
import { RootState } from "../../../store";
import { connect } from "react-redux";
import Input from "../../../components/Input";
import { toast } from "react-toastify";

function Formulario({ formulario, setForm }: IInfo) {
  const { id } = useParams();
  const [blocked, setBlocked] = useState(false);

  const handleOnChange = (event: ChangeEvent<any>) => {
    setForm({ [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setBlocked(true);

    await UsuarioService.editar(Number(id), formulario)
      .then(() => {
        toast("Informaçoes editadas com sucesso", { type: "success" });
        setBlocked(false);
      })
      .catch((error) => toast(error, { type: "error" }));
  };

  useEffect(() => {
    async function fetchData() {
      await UsuarioService.getsuarioById(Number(id))
        .then((response) => setForm(response))
        .catch((error) => toast(error, { type: "error" }));
    }

    fetchData();
  }, [id, setForm]);
  return (
    <div className="w-full grid grid-cols-1 bg-zinc-900">
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-1/3 sm:w-2/3 bg-slate-800 rounded-md shadow-md">
          <form className="flex flex-col gap-4 p-8">
            <h1 className="text-3xl mb-4 flex justify-center font-bold text-zinc-300">
              Informações do Usuário
            </h1>
            <Input
              label={"Nome completo"}
              name={"nome"}
              type={"text"}
              value={formulario.nome}
              onBlur={handleOnChange}
            />
            <Input
              label={"Email"}
              name={"email"}
              type={"email"}
              value={formulario.email}
              onBlur={handleOnChange}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label={"Login"}
                name={"login"}
                type={"text"}
                value={formulario.login}
                onBlur={handleOnChange}
              />
              <Input
                label={"Senha"}
                name={"senha"}
                type={"password"}
                value={formulario.senha}
                onBlur={handleOnChange}
              />
            </div>
            <button
              disabled={blocked}
              onClick={handleOnSubmit}
              className="bg-teal-600 mb-4 disabled:cursor-not-allowed disabled:bg-opacity-50 hover:bg-teal-800 duration-100 rounded-md p-2 font-bold text-lg text-white mt-5"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

interface IProps {
  formulario: IForm;
}

interface IDispatchProps {
  setForm: (data) => void;
}

type IInfo = IProps & IDispatchProps;

const mapStateToProps = (state: RootState) => ({
  formulario: state.usuario.content,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
  setForm: (data) => dispatch(setForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
