import * as React from 'react';
import { Text, View } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMovieListItem } from './useMovieListItem';

interface MovieItemProps {
  movie: Movie;
}

export const MovieListItem = ({ movie }: MovieItemProps) => {
  const { onRemoveIconPress, onEditIconPress, onItemPress } = useMovieListItem(movie.id);

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View style={styles.wrapper}>
        <View style={styles.textBlock}>
          <Text style={[styles.text, styles.title]}>Title: {movie.title}</Text>
          <Text style={styles.text}>Year: {movie.year}</Text>
          <Text style={styles.text}>Format: {movie.format}</Text>
        </View>
        <View style={styles.iconsBlock}>
          <TouchableOpacity style={styles.button} onPress={onEditIconPress}>
            <AntDesign name="edit" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onRemoveIconPress}>
            <FontAwesome name="trash-o" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
