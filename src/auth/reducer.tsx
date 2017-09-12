import { Reducer } from 'redux';

import { Action as AuthAction, ActionTypes as Type } from './Actions';

export interface AuthState {
  isLoggingIn: boolean;
  idToken: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  isLoggingIn: false,
  error: null,
  idToken: null,
};

export const reducer: Reducer<AuthState> = 
(state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case Type.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case Type.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: 'TEMPORARY PLACEHOLDER TOKEN: ' + action.idToken,
        isLoggingIn: false,
      };
    case Type.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: 'TEMPORARY PLACEHOLDER ERROR TEXT: ' + action.error,
      };
    case Type.LOGOUT: 
      return initialState;
    default: 
      return state;
  }
};

export default reducer;