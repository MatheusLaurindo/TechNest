import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login";
import perfilReducer from "./perfil";
import usuarioReducer from "./usuario";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        perfil: perfilReducer,
        usuario: usuarioReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch