import { GetUSuarioResp } from "../types/UsuarioDTOs";
import { apiRequest } from "./api";

const baseUrl = "/usuarios";

const service = {
  getsuarioById: async (id: number): Promise<GetUSuarioResp> =>
    await apiRequest<GetUSuarioResp>({ method: "GET", url: baseUrl + `/${id}`}),
};

export default service;
