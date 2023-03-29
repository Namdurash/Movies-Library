import {
  createMovieAPI,
  Filter,
  getMovieAPI,
  getMoviesAPI,
  modifyMovieAPI,
  MovieCreateRequest,
  MovieModifyRequest,
  removeMovieAPI,
} from '@api/movies';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMovies = createAsyncThunk('movies/getAll', async (params?: Filter) => {
  try {
    const result = await getMoviesAPI(params);
    return result.data;
  } catch (err) {
    throw new Error('Failed get movies');
  }
});

export const createMovie = createAsyncThunk('movies/create', async (data: MovieCreateRequest) => {
  try {
    const result = await createMovieAPI(data);
    return result.data;
  } catch (err) {
    throw new Error('Failed create movie');
  }
});

export const removeMovie = createAsyncThunk('movies/remove', async (id: number) => {
  try {
    await removeMovieAPI(id);
    return id;
  } catch (err) {
    throw new Error('Failed remove movie');
  }
});

export const modifyMovie = createAsyncThunk(
  'movies/modify',
  async ({ id, data }: { id: number; data: MovieModifyRequest }) => {
    try {
      const result = await modifyMovieAPI(id, data);
      return result.data;
    } catch (err) {
      throw new Error('Failed modify movie');
    }
  }
);

export const getMovie = createAsyncThunk('movies/one', async (id: number) => {
  try {
    const result = await getMovieAPI(id);
    return result.data;
  } catch (err) {
    throw new Error('Failed get movie');
  }
});
