import { apiDelete, apiGet, apiPatch, apiPost } from './client';

export interface MovieCreateRequest {
  title: string;
  year: number;
  format: string;
  actors: Array<string>;
}

export interface MovieModifyRequest {
  title?: string;
  year?: number;
  format?: string;
  actors?: Array<string>;
}

export interface Filter {
  actor?: string;
  title?: string;
  search?: string;
  sort?: 'id' | 'title' | 'year';
  order?: 'ASC' | 'DESC';
  limit?: number;
  offset?: number;
}

export const getMoviesAPI = (params?: Filter) => {
  return apiGet('/movies', params);
};

export const createMovieAPI = (data: MovieCreateRequest) => {
  return apiPost('/movies', data);
};

export const removeMovieAPI = (id: number) => {
  return apiDelete(`/movies/${id}`);
};

export const modifyMovieAPI = (id: number, data: MovieModifyRequest) => {
  return apiPatch(`/movies/${id}`, data);
};

export const getMovieAPI = (id: number) => {
  return apiGet(`/movies/${id}`);
};
