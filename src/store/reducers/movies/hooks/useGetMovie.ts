import * as React from 'react';
import { useAppSelector } from '@store/hooks/hooks';

export const useGetMovie = () => {
  const { movie } = useAppSelector((state) => state.movies);

  return React.useCallback(() => {
    return movie;
  }, [movie]);
};
