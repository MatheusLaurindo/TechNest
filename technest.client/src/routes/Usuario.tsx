import Formulario from "../pages/Usuario/Formulario";
import PrivateRoute from "./Private/PrivateRoutes";

export const usuario = [
  {
    path: "/usuario/:id",
    element: (
      <PrivateRoute>
        <Formulario />
      </PrivateRoute>
    ),
  },
];
