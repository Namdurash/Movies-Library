import { useAppDispatch } from '@store/hooks/hooks';
import * as React from 'react';
import { getMovie } from '../ActionCreators';

export const useFetchMovie = (id: number) => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);
};
