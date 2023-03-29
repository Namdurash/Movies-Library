import { useAppSelector } from '@store/hooks/hooks';
import { useClearMovieInfo, useGetMovies } from '@store/reducers/movies/hooks';
import * as React from 'react';
import * as Navigation from '@react-navigation/native';
import { Routes } from '@navigation/routes';

export const useHome = () => {
  const navigation = Navigation.useNavigation();
  const getMovies = useGetMovies();
  const clearMovieInfo = useClearMovieInfo();
  const { movies, isLoading } = useAppSelector((state) => state.movies);

  const onAddNewMoviePress = React.useCallback(() => {
    navigation.navigate(Routes.AddMovie, {
      isModifyMode: false,
    });
  }, [navigation]);

  const onFilterIconPress = () => {
    clearMovieInfo();
    navigation.navigate(Routes.FilterMovies);
  };

  React.useEffect(() => {
    getMovies();
  }, [getMovies]);

  return {
    movies,
    isLoading,
    onAddNewMoviePress,
    onFilterIconPress,
  };
};
