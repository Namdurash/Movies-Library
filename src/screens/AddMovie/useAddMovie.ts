import { useAppSelector } from '@store/hooks/hooks';
import {
  useClearMovieInfo,
  useCreateMovie,
  useGetMovie,
  useModifyMovie,
} from '@store/reducers/movies/hooks';
import * as React from 'react';
import * as Navigation from '@react-navigation/native';
import { Keyboard } from 'react-native';
import { Format } from './formatTypes';

interface ModifyMovieRoute {
  key: string;
  name: string;
  params: {
    isModifyMode: boolean;
  };
}

const formatActors = (actorsString: string) => {
  const result = actorsString.split(',').map((el: string) => el.trim());
  return result;
};

export const useAddMovie = () => {
  const [title, setTitle] = React.useState<string>('');
  const [year, setYear] = React.useState<string>('');
  const [format, setFormat] = React.useState<string>('');
  const [actors, setActors] = React.useState<string>('');
  const { isUpdated } = useAppSelector((state) => state.movies);
  const navigation = Navigation.useNavigation();
  const route = Navigation.useRoute<ModifyMovieRoute>();
  const clearMovieInfo = useClearMovieInfo();
  const formattedActors = formatActors(actors);
  const getMovie = useGetMovie();
  const modifyMovie = useModifyMovie();

  React.useEffect(() => {
    clearMovieInfo();
    if (route.params.isModifyMode) {
      const movie = getMovie();
      const movieFromattedActors = movie.actors
        .map((el) => {
          return el.name;
        })
        .join(', ');

      setTitle(movie.title);
      setYear(movie.year.toString());
      setFormat(movie.format);
      setActors(movieFromattedActors);
    }
  }, [clearMovieInfo, getMovie, route.params]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      clearMovieInfo();
    });
    return () => unsubscribe();
  }, [clearMovieInfo, navigation]);

  const addMovie = useCreateMovie({
    title: title,
    year: Number(year),
    format: format,
    actors: formattedActors,
  });

  const onChangeTitle = (value: string) => {
    setTitle(value);
  };

  const onChangeYear = (value: string) => {
    setYear(value.trim());
  };

  const onChangeFormat = (value: string) => {
    setFormat(value);
  };

  const onChangeActors = (value: string) => {
    setActors(value);
  };

  const onAddMovie = React.useCallback(() => {
    addMovie();
  }, [addMovie]);

  const onBlur = React.useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onModifyMovie = React.useCallback(() => {
    const movie = getMovie();

    modifyMovie(movie.id, {
      title: title.trim(),
      year: Number(year),
      format: format,
      actors: formattedActors,
    });
  }, [format, formattedActors, getMovie, modifyMovie, title, year]);

  const showMovieFormat = (formats: Array<Format>) => {
    const result = formats.find((el) => el.value === format);

    return result?.value;
  };

  return {
    title,
    year,
    actors,
    isUpdated,
    isModifyMode: route.params.isModifyMode,
    format,
    onChangeTitle,
    onChangeYear,
    onChangeFormat,
    onChangeActors,
    onAddMovie,
    onBlur,
    onModifyMovie,
    showMovieFormat,
  };
};
