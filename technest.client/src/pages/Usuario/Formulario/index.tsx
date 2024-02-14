import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UsuarioService } from "../../../service";
import { GetUSuarioResp } from "../../../types/UsuarioDTOs";

function Formulario() {
  const { id } = useParams();

  const [usuario, setUsuario] = useState<GetUSuarioResp>();

  useEffect(() => {
    async function fetchData() {
      await UsuarioService.getsuarioById(Number(id))
        .then((response) => setUsuario(response))
        .catch((error) => alert(error));
    }

    fetchData();
  }, [id]);
  return (
    <div>
      <h1 className="text-3xl text-zinc-200">Formulario usuario</h1>
      <ul className="text-zinc-200">
        <li>ID: {usuario?.id}</li>
        <li>Nome: {usuario?.nome}</li>
        <li>Email: {usuario?.email}</li>
        <li>Login: {usuario?.login}</li>
        <li>Senha: {usuario?.senha}</li>
      </ul>
    </div>
  );
}

export default Formulario;
