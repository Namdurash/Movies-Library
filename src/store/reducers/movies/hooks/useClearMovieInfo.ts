import { useAppDispatch } from '@store/hooks/hooks';
import * as React from 'react';
import { moviesSlice } from '../moviesSlice';

export const useClearMovieInfo = () => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(moviesSlice.actions.clearMovie());
  }, [dispatch]);
};
