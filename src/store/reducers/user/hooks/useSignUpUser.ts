import { SignUpParams } from '@api/user';
import { TokenHolder } from '@managers/TokenHolder';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import * as React from 'react';

import { signUpUser } from '../ActionCreators';

export const useSignUpUser = (data: SignUpParams) => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  React.useEffect(() => {
    TokenHolder.storeToken(token);
  }, [token]);

  return React.useCallback(() => {
    dispatch(signUpUser(data));
  }, [data, dispatch]);
};
