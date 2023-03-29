import { useAppSelector } from '@store/hooks/hooks';
import * as Navigation from '@react-navigation/native';

export const useMovieDetailsPage = () => {
  const { movie } = useAppSelector((state) => state.movies);
  const navigation = Navigation.useNavigation();
  const movieFromattedActors = movie.actors
    .map((el) => {
      return el.name;
    })
    .join(', ');
  const formatDate = (date: string) => {
    const newDate = new Date(date);

    return newDate.toLocaleString();
  };

  const onGoBackPress = () => {
    navigation.goBack();
  };

  return {
    title: movie.title,
    year: movie.year,
    format: movie.format,
    actors: movieFromattedActors,
    created: formatDate(movie.createdAt),
    updated: formatDate(movie.updatedAt),
    onGoBackPress,
  };
};
