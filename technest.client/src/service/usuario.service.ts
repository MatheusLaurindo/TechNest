import { GetUSuarioResp, UsuarioReq } from "../types/UsuarioDTOs";
import { apiRequest } from "./api";

const baseUrl = "/usuarios";

const service = {
  getsuarioById: async (id: number): Promise<GetUSuarioResp> =>
    await apiRequest<GetUSuarioResp>({
      method: "GET",
      url: baseUrl + `/${id}`,
    }),

  cadastrar: async (usuario: UsuarioReq): Promise<number> =>
    await apiRequest<number>({
      method: "POST",
      url: "/cadastro",
      data: usuario,
    }),

  editar: async (id: number, usuario: UsuarioReq): Promise<number> =>
    await apiRequest<number>({
      method: "PUT",
      url: baseUrl + `/editar/${id}`,
      data: usuario,
    }),
};

export default service;
