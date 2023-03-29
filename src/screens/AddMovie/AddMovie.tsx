import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { useAddMovie } from './useAddMovie';
import { SelectList } from 'react-native-dropdown-select-list';
import { dataFormats } from './formatTypes';

export const AddMovie = () => {
  const {
    title,
    year,
    actors,
    isUpdated,
    isModifyMode,
    onChangeTitle,
    onChangeYear,
    onChangeFormat,
    onChangeActors,
    onAddMovie,
    onBlur,
    onModifyMovie,
    showMovieFormat,
  } = useAddMovie();

  return (
    <TouchableWithoutFeedback onPress={onBlur}>
      <View style={styles.container}>
        <Text style={styles.title}>Add a new movie to the library</Text>
        <TextInput
          placeholder="title"
          style={styles.input}
          value={title}
          onChangeText={onChangeTitle}
        />
        <TextInput
          placeholder="year"
          style={styles.input}
          value={year}
          keyboardType="numeric"
          onChangeText={onChangeYear}
        />
        <SelectList
          placeholder={isModifyMode ? showMovieFormat(dataFormats) : 'Choose format'}
          setSelected={onChangeFormat}
          data={dataFormats}
          save="value"
          search={false}
          boxStyles={styles.selectList}
          inputStyles={styles.selectListInput}
          dropdownStyles={styles.dropdown}
        />
        <TextInput
          placeholder="actors"
          style={[styles.input, styles.actorsInput]}
          value={actors}
          onChangeText={onChangeActors}
          multiline
          numberOfLines={4}
        />
        <Text style={styles.text}>Example: Tom Hardy, Danny Hart</Text>
        {isModifyMode ? (
          <TouchableOpacity style={styles.button} onPress={onModifyMovie}>
            <Text>Modify movie</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={onAddMovie}>
            <Text>Add movie</Text>
          </TouchableOpacity>
        )}
        {isUpdated && !isModifyMode && <Text>Successful added</Text>}
        {!isUpdated && isModifyMode && <Text>Successful updated</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};
