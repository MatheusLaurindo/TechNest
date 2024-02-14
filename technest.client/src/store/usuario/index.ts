/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: {
    id: 0,
    nome: "",
    email: "",
    login: "",
    senha: "",
  },
};

export const slice = createSlice({
  name: "perfil/usuario",
  initialState,
  reducers: {
    setForm: (state: IState, { payload }: PayloadAction<any>) => {
      state.content = { ...state.content, ...payload };
    },
  },
});

interface IState {
  content: {
    id: number;
    nome: string;
    email: string;
    login: string;
    senha: string;
  };
}

export const { setForm } = slice.actions;

export type IForm = typeof initialState.content;

export default slice.reducer;
