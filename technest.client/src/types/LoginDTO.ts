export interface ILoginReq {
  login: string;
  senha: string;
}

export interface ILoginResp {
  idUsuario: number;
  token: string;
}

export interface IPerfil {
  Id: string;
  unique_name: string;
  role: string;
}
