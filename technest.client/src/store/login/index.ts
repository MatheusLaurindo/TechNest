/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: {
    login: "",
    senha: "",
  },
};

export const slice = createSlice({
  name: "login/formulario",
  initialState,
  reducers: {
    setForm: (state: IState, { payload }: PayloadAction<any>) => {
      state.content = { ...state.content, ...payload };
    },
  },
});

interface IState {
  content: {
    login: string;
    senha: string;
  };
}

export const { setForm } = slice.actions;

export type IForm = typeof initialState.content;

export default slice.reducer;
