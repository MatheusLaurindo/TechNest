import { apiRequest } from "./api";
import { ICategorias } from "../types/CategoriaDTOs";

const baseUrl = "/categorias";

const service = {
  getCategorias: async (): Promise<ICategorias[]> =>
    await apiRequest<ICategorias[]>({ method: "GET", url: baseUrl }),
};

export default service;
