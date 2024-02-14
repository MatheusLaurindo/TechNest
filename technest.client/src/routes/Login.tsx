import * as React from "react";
import Login from "../pages/Login";

const token = localStorage.getItem('jwt_token');

export const login = [
    {
        path: "/login",
        element: !token ? <Login /> : <React.Fragment />,
    }
]