import { colors } from '@ui/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.darkRed,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: colors.lightGray,
  },
  input: {
    width: '70%',
    height: 50,
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 15,
    color: colors.dark,
    backgroundColor: colors.lightGray,
  },
  selectList: {
    width: '65%',
    height: 50,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: colors.lightGray,
  },
  selectListInput: {
    width: '100%',
  },
  dropdown: {
    marginBottom: 10,
    marginTop: -10,
    height: 120,
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
  actorsInput: {
    marginBottom: 2,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});
