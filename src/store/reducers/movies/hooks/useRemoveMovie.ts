import { useAppDispatch } from '@store/hooks/hooks';
import * as React from 'react';
import { removeMovie } from '../ActionCreators';

export const useRemoveMovie = (id: number) => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(removeMovie(id));
  }, [id, dispatch]);
};
