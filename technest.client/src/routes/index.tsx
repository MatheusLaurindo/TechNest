import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Error/NaoAutorizado";

import { dashboard } from "./Dashboard";
import { login } from "./Login";
import { registro } from "./Registro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [...dashboard, ...login, ...registro],
  },
]);
