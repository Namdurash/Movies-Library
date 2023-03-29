import { colors } from '@ui/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    paddingTop: 40,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: colors.lightGray,
  },
  picker: {
    width: '80%',
    height: 200,
    backgroundColor: colors.lightGray,
    borderRadius: 20,
  },
  switch: {
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.lightGray,
  },
  input: {
    width: '70%',
    height: 50,
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 10,
    color: colors.dark,
    backgroundColor: colors.lightGray,
  },
  button: {
    width: '50%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: colors.lightGray,
  },
});
