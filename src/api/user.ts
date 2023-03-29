import Axios from 'axios';

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export const signUp = (data: SignUpParams) => {
  return Axios.post('http://192.168.0.103:8000/api/v1/users', data);
};

export const signIn = (data: SignInParams) => {
  return Axios.post('http://192.168.0.103:8000/api/v1/sessions', data);
};
