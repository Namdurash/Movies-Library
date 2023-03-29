import { colors } from '@ui/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 5,
    backgroundColor: colors.redBrown,
    borderRadius: 20,
    flexDirection: 'row',
  },
  textBlock: {
    width: '70%',
  },
  title: {
    fontSize: 18,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    color: colors.lightGray,
  },
  iconsBlock: {
    width: '30%',
    paddingTop: 20,
    flexDirection: 'row',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: colors.lightRed,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
