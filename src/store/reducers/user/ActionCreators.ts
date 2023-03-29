import { signIn, signUp, SignUpParams, SignInParams } from '@api/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUpUser = createAsyncThunk('user/create', async (data: SignUpParams, thunkAPI) => {
  try {
    const result = await signUp(data);
    return result.data;
  } catch (err) {
    if (err instanceof Error) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
});

export const signInUser = createAsyncThunk('user/create', async (data: SignInParams, thunkAPI) => {
  try {
    const result = await signIn(data);
    return result.data;
  } catch (err) {
    if (err instanceof Error) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
});
