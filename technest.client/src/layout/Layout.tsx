/* eslint-disable react-refresh/only-export-components */
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import { IForm, setForm } from "../store/perfil";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

function Layout({ formulario, setForm }: IInfo) {
  const navigate = useNavigate();

  useEffect(() => {
    function ExtractDataToken() {
      const token = localStorage.getItem("jwt_token");
      if (!token) return false;

      const data = JSON.parse(atob(token.split(".")[1]));
      setForm({ id: data.Id, nome: data.unique_name, role: data.role });
    }

    ExtractDataToken();
  }, [setForm]);
  return (
    <div className="fixed w-screen h-screen flex flex-col items-center">
      <Navbar
        logo={logo}
        name={"TECHNEST"}
        mainContent={undefined}
        endContent={
          formulario.id !== "0" ? (
            <div className="flex gap-7">
              <p className="text-teal-500 brightness-200">
                Olá, {formulario.nome}!
              </p>
              <a
                href=""
                onClick={() => {
                  navigate(`/usuario/${formulario.id}`);
                }}
              >
                Perfil
              </a>
              <a
                href=""
                onClick={() => {
                  localStorage.removeItem("jwt_token");
                  navigate("/");
                }}
              >
                Sair
              </a>
            </div>
          ) : (
            <a href="" onClick={() => navigate("/login")}>
              Fazer login
            </a>
          )
        }
      />
      <div className="w-full h-full flex justify-center p-3">
        <Outlet /> <ToastContainer />
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
  formulario: state.perfil.content,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
  setForm: (data) => dispatch(setForm(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
