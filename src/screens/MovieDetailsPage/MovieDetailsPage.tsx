import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useMovieDetailsPage } from './useMovieDetailsPage';

export const MovieDetailsPage = () => {
  const { title, format, year, actors, created, updated, onGoBackPress } = useMovieDetailsPage();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Details</Text>
      <View style={styles.textBlock}>
        <Text style={styles.text}>Title: {title}</Text>
        <Text style={styles.text}>Year: {year}</Text>
        <Text style={styles.text}>Format: {format}</Text>
        <Text style={styles.text}>Actors: {actors}</Text>
        <Text style={styles.text}>Added to library: {created}</Text>
        <Text style={styles.text}>Updated in library: {updated}</Text>
        <TouchableOpacity style={styles.button} onPress={onGoBackPress}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
