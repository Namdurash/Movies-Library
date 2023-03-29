import { SignInParams } from '@api/user';
import { TokenHolder } from '@managers/TokenHolder';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import * as React from 'react';

import { signInUser } from '../ActionCreators';

export const useSignInUser = (data: SignInParams) => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    TokenHolder.storeToken(token);
  }, [token]);

  return React.useCallback(() => {
    dispatch(signInUser(data));
  }, [data, dispatch]);
};
