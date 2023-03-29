import { TokenHolder } from '@managers/TokenHolder';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

type Method = 'get' | 'post' | 'delete' | 'put' | 'patch';

const API_BASE_URL = 'http://192.168.0.103:8000/api/v1';

export const apiRequestWithToken = async (
  method: Method,
  url: string,
  data?: any,
  params?: any
) => {
  try {
    const token = await TokenHolder.getToken();
    const config: AxiosRequestConfig = {
      method: method,
      url: `${API_BASE_URL}${url}`,
      headers: {
        Authorization: `${token}`,
      },
      data: data,
      params: params,
    };

    const response = await axios(config);

    return response.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (typeof err === typeof axiosError) {
      throw new Error(axiosError.message);
    }
    throw new Error('Broken Token');
  }
};

export const apiGet = async (url: string, params?: any, data?: any) => {
  return apiRequestWithToken('get', url, data, params);
};

export const apiPost = async (url: string, data: any) => {
  return apiRequestWithToken('post', url, data);
};

export const apiDelete = async (url: string) => {
  return apiRequestWithToken('delete', url);
};

export const apiPut = async (url: string, data: any) => {
  return apiRequestWithToken('put', url, data);
};

export const apiPatch = async (url: string, data: any) => {
  return apiRequestWithToken('patch', url, data);
};
