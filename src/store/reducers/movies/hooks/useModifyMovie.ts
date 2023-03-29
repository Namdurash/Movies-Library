import { MovieModifyRequest } from '@api/movies';
import { useAppDispatch } from '@store/hooks/hooks';
import * as React from 'react';
import { modifyMovie } from '../ActionCreators';

export const useModifyMovie = () => {
  const dispatch = useAppDispatch();

  return React.useCallback(
    (id: number, data: MovieModifyRequest) => {
      dispatch(modifyMovie({ id, data }));
    },
    [dispatch]
  );
};
