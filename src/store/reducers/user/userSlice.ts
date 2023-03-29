import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signInUser, signUpUser } from './ActionCreators';

interface UserState {
  token: string;
  status: number;
  isLoading: boolean;
  error: string;
}

interface UserPayload {
  token: string;
  status: number;
}

const initialState: UserState = {
  token: '',
  status: 0,
  isLoading: true,
  error: '',
};

export const userSlice = createSlice({
  name: 'UsersList',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled.type]: (state, action: PayloadAction<UserPayload>) => {
      state.token = action.payload.token;
      state.status = action.payload.status;
      state.isLoading = false;
    },
    [signUpUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signUpUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [signInUser.fulfilled.type]: (state, action: PayloadAction<UserPayload>) => {
      state.token = action.payload.token;
      state.status = action.payload.status;
      state.isLoading = false;
    },
    [signInUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
