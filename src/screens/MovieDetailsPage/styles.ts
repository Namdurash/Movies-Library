import { colors } from '@ui/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    backgroundColor: colors.darkRed,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
    color: colors.lightGray,
  },
  textBlock: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.lightGray,
  },
  button: {
    width: '34%',
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.redBrown,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
