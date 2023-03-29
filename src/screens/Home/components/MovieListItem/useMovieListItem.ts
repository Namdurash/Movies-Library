import { useFetchMovie, useRemoveMovie } from '@store/reducers/movies/hooks';
import * as React from 'react';
import * as Navigation from '@react-navigation/native';
import { Routes } from '@navigation/routes';

export const useMovieListItem = (movieId: number) => {
  const removeMovie = useRemoveMovie(movieId);
  const navigation = Navigation.useNavigation();
  const getMovie = useFetchMovie(movieId);

  const onRemoveIconPress = React.useCallback(() => {
    removeMovie();
  }, [removeMovie]);

  const onEditIconPress = React.useCallback(() => {
    getMovie();
    navigation.navigate(Routes.AddMovie, {
      isModifyMode: true,
    });
  }, [getMovie, navigation]);

  const onItemPress = React.useCallback(() => {
    getMovie();
    navigation.navigate(Routes.MovieDetails);
  }, [getMovie, navigation]);

  return {
    onRemoveIconPress,
    onItemPress,
    onEditIconPress,
  };
};
