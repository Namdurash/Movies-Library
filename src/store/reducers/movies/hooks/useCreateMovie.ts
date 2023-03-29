import { MovieCreateRequest } from '@api/movies';
import { useAppDispatch } from '@store/hooks/hooks';
import * as React from 'react';
import { createMovie } from '../ActionCreators';

export const useCreateMovie = (data: MovieCreateRequest) => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(createMovie(data));
  }, [data, dispatch]);
};
