import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Movie } from '../../types/Movie';
import { MovieListItem } from './components';
import { styles } from './styles';
import { useHome } from './useHome';
import { Feather } from '@expo/vector-icons';

interface MovieRenderItem {
  item: Movie;
}

const renderListItem = ({ item }: MovieRenderItem) => {
  return <MovieListItem movie={item} />;
};

const getKeyExtractor = (item: Movie) => {
  return `${item.id}-${item.title}`;
};

export const Home = () => {
  const { movies, isLoading, onAddNewMoviePress, onFilterIconPress } = useHome();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Movies Library</Text>
        <View style={styles.buttonsBlock}>
          <TouchableOpacity style={styles.button} onPress={onAddNewMoviePress}>
            <Text>Add a new movie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterWrapper} onPress={onFilterIconPress}>
            <Feather name="filter" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderListItem}
          style={styles.listContainer}
          keyExtractor={getKeyExtractor}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
