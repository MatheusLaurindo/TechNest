export interface ILoginReq {
    login: string;
    senha: string;
}

export interface ILoginResp {
    idUsuario: number;
    token: string;
}