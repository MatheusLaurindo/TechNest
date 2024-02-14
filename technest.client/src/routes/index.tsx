import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import { dashboard } from "./Dashboard";
import Error from "../pages/Error";
import { login } from "./Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [...dashboard, ...login],
  },
]);
