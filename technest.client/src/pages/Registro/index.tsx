/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router";
import Input from "../../components/Input";
import { IForm, setForm } from "../../store/usuario";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { UsuarioService } from "../../service";

function Registro({ formulario, setForm }: IInfo) {
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setForm({ [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await UsuarioService.cadastrar(formulario)
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="w-full grid grid-cols-1 bg-zinc-900">
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-1/3 sm:w-2/3 bg-slate-800 rounded-md shadow-md">
          <form className="flex flex-col gap-4 p-8">
            <h1 className="text-3xl flex justify-center font-bold text-zinc-300">
              Cadastro de Usuário
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
              onClick={handleOnSubmit}
              className="bg-teal-600 disabled:cursor-not-allowed disabled:bg-opacity-50 hover:bg-teal-800 duration-100 rounded-md p-2 font-bold text-lg text-white mt-5"
            >
              Cadastrar
            </button>
            <p className="text-zinc-200 flex justify-center gap-1">
              Já Possui uma conta?{" "}
              <a
                href=""
                onClick={() => navigate("/login")}
                className="text-teal-500 brightness-125"
              >
                Clique aqui
              </a>
            </p>
            <div className="flex justify-end mt-2">
              <a
                href=""
                onClick={() => navigate("/")}
                className="p-2 bg-zinc-600 w-24 text-center rounded-md text-zinc-200 brightness-125"
              >
                Voltar
              </a>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registro);
