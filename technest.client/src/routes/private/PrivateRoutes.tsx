import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";

import Error from "../../pages/Error";
import { dashboard } from "../Dashboard";
import { login } from "../Login";
import { registro } from "../Registro";
import { usuario } from "./Usuario";

export const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [...dashboard, ...login, ...registro, ...usuario],
  },
]);
