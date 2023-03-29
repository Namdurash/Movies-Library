import { colors } from '@ui/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    paddingBottom: 180,
  },
  welcomeTitle: {
    fontSize: 24,
    marginBottom: 80,
    color: colors.dark,
  },
  signInTitle: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.dark,
  },
  input: {
    width: '70%',
    height: 50,
    paddingLeft: 10,
    borderRadius: 20,
    marginBottom: 15,
    color: colors.dark,
    backgroundColor: colors.lightGray,
  },
  createAccountBlock: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountText: {
    fontSize: 14,
    marginBottom: 20,
    color: colors.dark,
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
  buttonText: {
    fontSize: 16,
    color: colors.dark,
  },
});
