import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import { useFilterMovies } from './useFilterMovies';

type Sort = 'id' | 'title' | 'year';
type Order = 'ASC' | 'DESC';

export const FilterMovies = () => {
  const [actor, setActor] = useState('');
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<Sort>('id');
  const [order, setOrder] = useState<Order>('ASC');
  const [limit, setLimit] = useState('20');
  const [offset, setOffset] = useState('0');

  const { handleFilter, onBlur } = useFilterMovies({
    actor: actor,
    title: title,
    search: search,
    sort: sort,
    order: order,
    limit: Number(limit),
    offset: Number(offset),
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'height' : undefined}>
      <TouchableWithoutFeedback onPress={onBlur}>
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          <Text style={styles.title}>Filter Movies</Text>
          <TextInput
            style={styles.input}
            value={actor}
            onChangeText={setActor}
            placeholder="Actor"
          />
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={setSearch}
            placeholder="Search by actor and movie title"
          />
          <Text style={styles.text}>Sort:</Text>
          <Picker selectedValue={sort} onValueChange={setSort} style={styles.picker}>
            <Picker.Item label="id" value="id" />
            <Picker.Item label="title" value="title" />
            <Picker.Item label="year" value="year" />
          </Picker>
          <Text style={styles.text}>Order:</Text>
          <Switch
            value={order === 'ASC'}
            onValueChange={(value) => setOrder(value ? 'ASC' : 'DESC')}
            style={styles.switch}
          />
          <TextInput
            style={styles.input}
            value={limit}
            onChangeText={setLimit}
            keyboardType="numeric"
            placeholder="Limit"
          />
          <TextInput
            style={styles.input}
            value={offset}
            onChangeText={setOffset}
            keyboardType="numeric"
            placeholder="Offset"
          />
          <TouchableOpacity style={styles.button} onPress={handleFilter}>
            <Text>Filter</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
