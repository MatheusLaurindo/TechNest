import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://localhost:7188/api/v1/",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
