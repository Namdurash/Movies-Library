import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../../types/Movie';
import { createMovie, getMovie, getMovies, modifyMovie, removeMovie } from './ActionCreators';

interface MoviesState {
  movies: Array<Movie>;
  movie: Movie;
  isLoading: boolean;
  isUpdated: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  movie: {
    id: 0,
    title: '',
    year: 0,
    format: 'DVD',
    actors: [
      {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
    createdAt: '',
    updatedAt: '',
  },
  isLoading: true,
  isUpdated: true,
  error: '',
};

export const moviesSlice = createSlice({
  name: 'MoviesList',
  initialState,
  reducers: {
    clearMovie: (state) => {
      state.isUpdated = false;
    },
  },
  extraReducers: {
    [getMovies.fulfilled.type]: (state, action: PayloadAction<Array<Movie>>) => {
      state.movies = action.payload;
      state.isLoading = false;
    },
    [getMovies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [createMovie.fulfilled.type]: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
      state.isUpdated = false;
    },
    [createMovie.pending.type]: (state) => {
      state.isUpdated = true;
    },
    [removeMovie.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((el) => el.id !== action.payload);
    },
    [modifyMovie.fulfilled.type]: (state, action: PayloadAction<Movie>) => {
      state.movies = state.movies.filter((el) => el.id !== action.payload.id);
      state.movies.unshift(action.payload);
      state.isUpdated = false;
    },
    [getMovie.fulfilled.type]: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload;
    },
  },
});

export const moviesReducer = moviesSlice.reducer;
