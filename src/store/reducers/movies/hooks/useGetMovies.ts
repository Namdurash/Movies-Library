import { Filter } from '@api/movies';
import { useAppDispatch } from '@store/hooks/hooks';
import * as React from 'react';
import { getMovies } from '../ActionCreators';

export const useGetMovies = () => {
  const dispatch = useAppDispatch();

  return React.useCallback(
    (params?: Filter) => {
      dispatch(getMovies(params));
    },
    [dispatch]
  );
};
