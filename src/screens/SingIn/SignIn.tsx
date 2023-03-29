import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { useSignIn } from './useSignIn';

export const SignIn = () => {
  const { onSignUpPress, onSignInPress, onEmailChange, onPasswordChange, email, password } =
    useSignIn();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to Movies Library</Text>
      <Text style={styles.signInTitle}>Sign In</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        textContentType="emailAddress"
        inputMode="email"
        onChangeText={onEmailChange}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={onPasswordChange}
        value={password}
        style={styles.input}
        textContentType="password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={onSignInPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.createAccountBlock}>
        <Text style={styles.createAccountText}>Don't have an account?</Text>
        <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
