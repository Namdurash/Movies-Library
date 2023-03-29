import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { styles } from './styles';
import { useSignUp } from './useSignUp';

export const SignUp = () => {
  const {
    onSignInPress,
    onSignUpPress,
    onNameChangeText,
    onEmailChangeText,
    onPasswordChangeText,
    onConfirmPasswordChangeText,
    name,
    email,
    password,
    confirmPassword,
  } = useSignUp();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={onNameChangeText}
          value={name}
        />
        <TextInput
          placeholder="Email"
          textContentType="emailAddress"
          inputMode="email"
          style={styles.input}
          onChangeText={onEmailChangeText}
          value={email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={onPasswordChangeText}
          value={password}
          style={styles.input}
          textContentType="password"
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm password"
          onChangeText={onConfirmPasswordChangeText}
          value={confirmPassword}
          style={styles.input}
          textContentType="password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.createAccountBlock}>
          <Text style={styles.createAccountText}>Already have an account?</Text>
          <TouchableOpacity style={styles.button} onPress={onSignInPress}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
