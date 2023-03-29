import { colors } from '@ui/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.darkRed,
    paddingTop: 10,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  filterWrapper: {
    width: 40,
    height: 40,
    backgroundColor: colors.redBrown,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  button: {
    width: '64%',
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.redBrown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: colors.lightGray,
    marginTop: 30,
  },
  listContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
