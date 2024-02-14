import * as React from "react";
import Registro from "../pages/Registro";

const token = localStorage.getItem('jwt_token');

export const registro = [
    {
        path: "/registrar",
        element: !token ? <Registro /> : <React.Fragment />,
    }
]