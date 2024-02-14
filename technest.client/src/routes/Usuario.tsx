import Formulario from "../pages/Usuario/Formulario";

import Error from "../pages/Error/NaoAutorizado";

const token = localStorage.getItem("jwt_token");

export const usuario = [
  {
    path: "/usuario/:id",
    element: token ? <Formulario /> : <Error />,
  },
];
