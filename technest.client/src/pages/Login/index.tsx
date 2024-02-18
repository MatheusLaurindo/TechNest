/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import { type RootState } from "../../store";
import { IForm, setForm } from "../../store/login";
import Input from "../../components/Input";
import { ChangeEvent, useState } from "react";
import { LoginService } from "../../service";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
function Login({ formulario, setForm }: IInfo) {
  const [blocked, setBlocked] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (event: ChangeEvent<any>) => {
    setForm({ [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    setBlocked(true);

    await LoginService.login(formulario)
      .then((response) => {
        localStorage.setItem("jwt_token", response.token);
        window.location.href = "/";
      })
      .catch(() => {
        toast("Usuário ou senha inválidos", { type: "error" })
        setBlocked(false);
      });
  };

  return (
    <div className="w-full grid grid-cols-1 bg-zinc-900">
      <div className="flex justify-center items-center">
        <div className="md:w-1/3 sm:w-2/3 h-[400px] bg-slate-800 rounded-md shadow-md">
          <form className="flex flex-col gap-4 p-8">
            <h1 className="text-3xl flex justify-center font-bold text-zinc-300">
              Faça seu login
            </h1>
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
            <button
              disabled={blocked}
              onClick={handleOnSubmit}
              className="bg-teal-600 disabled:cursor-not-allowed disabled:bg-opacity-50 hover:bg-teal-800 duration-100 rounded-md p-2 font-bold text-lg text-white mt-5"
            >
              Entrar
            </button>
            <p className="text-zinc-200 flex justify-center gap-1">
              Não possui uma conta?{" "}
              <a href="" onClick={() => navigate("/registrar")} className="text-teal-500 brightness-125">
                Clique aqui
              </a>
            </p>
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
  setForm: (data: any) => void;
}

type IInfo = IProps & IDispatchProps;

const mapStateToProps = (state: RootState) => ({
  formulario: state.login.content,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  setForm: (data: any) => dispatch(setForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
