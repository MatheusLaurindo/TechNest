import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LayoutLogin from "../layout/LayoutLogin";

import { dashboard } from "./Dashboard";
import { login } from "./Login";
import { registro } from "./Registro";
import { usuario } from "./Usuario";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...dashboard,
      ...usuario
    ],
  },
  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      ...login,
      ...registro,
    ],
  },
]);
