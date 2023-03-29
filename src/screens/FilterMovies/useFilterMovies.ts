import * as React from 'react';
import { Filter } from '@api/movies';
import { useGetMovies } from '@store/reducers/movies/hooks';
import * as Navigation from '@react-navigation/native';
import { Keyboard } from 'react-native';

export const useFilterMovies = ({ actor, title, search, sort, order, limit, offset }: Filter) => {
  const getMovies = useGetMovies();
  const navigation = Navigation.useNavigation();

  const handleFilter = () => {
    const filter: Filter = {
      actor,
      title,
      search,
      sort,
      order,
      limit,
      offset,
    };
    const filtered = Object.entries(filter).reduce((acc: any, [key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        acc[key] = value;
      }
      return acc;
    }, {});

    getMovies(filtered);
    navigation.goBack();
  };

  const onBlur = React.useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return {
    handleFilter,
    onBlur,
  };
};
