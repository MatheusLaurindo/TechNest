import { ILoginReq, ILoginResp } from "../types/LoginDTO";
import { apiRequest } from "./api";

const baseUrl = "/login";

const service = {
  login: async (formulario: ILoginReq): Promise<ILoginResp> =>
    await apiRequest<ILoginResp>({ method: "POST", url: baseUrl, data: formulario}),
};

export default service;
