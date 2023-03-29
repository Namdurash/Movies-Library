import * as Navigation from '@react-navigation/native';
import { useSignUpUser } from '@store/reducers/user/hooks/useSignUpUser';
import * as React from 'react';

export const useSignUp = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const navigation = Navigation.useNavigation();
  const signUp = useSignUpUser({ name, email, password, confirmPassword });

  const onSignInPress = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSignUpPress = React.useCallback(() => {
    signUp();
  }, [signUp]);

  const onNameChangeText = React.useCallback((text: string) => {
    setName(text);
  }, []);

  const onEmailChangeText = React.useCallback((text: string) => {
    setEmail(text);
  }, []);

  const onPasswordChangeText = React.useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onConfirmPasswordChangeText = React.useCallback((text: string) => {
    setConfirmPassword(text);
  }, []);

  return {
    onSignInPress,
    onSignUpPress,
    onConfirmPasswordChangeText,
    onEmailChangeText,
    onPasswordChangeText,
    onNameChangeText,
    name,
    email,
    password,
    confirmPassword,
  };
};
