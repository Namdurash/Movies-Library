import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { moviesReducer } from './reducers/movies';

import { userReducer } from './reducers/user';

const reducers = {
  user: userReducer,
  movies: moviesReducer,
};

const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;

export const rootStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof rootStore>;
export type AppDispatch = AppStore['dispatch'];
