export interface UsuarioReq {
  id: number;
  nome: string;
  email: string;
  login: string;
  senha: string;
}

export interface GetUSuarioResp {
  id: number;
  nome: string;
  email: string;
  login: string;
  senha: string;
}
