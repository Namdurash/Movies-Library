import { Routes } from '@navigation/routes';
import * as Navigation from '@react-navigation/native';
import { useSignInUser } from '@store/reducers/user/hooks';
import * as React from 'react';

export const useSignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = Navigation.useNavigation();
  const signIn = useSignInUser({ email, password });

  const onSignUpPress = React.useCallback(() => {
    navigation.navigate(Routes.SignUp);
  }, [navigation]);

  const onSignInPress = React.useCallback(() => {
    signIn();
  }, [signIn]);

  const onEmailChange = React.useCallback((text: string) => {
    setEmail(text);
  }, []);

  const onPasswordChange = React.useCallback((text: string) => {
    setPassword(text);
  }, []);

  return {
    onSignUpPress,
    onEmailChange,
    onPasswordChange,
    onSignInPress,
    email,
    password,
  };
};
