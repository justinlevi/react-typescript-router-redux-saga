// ---------------
// Actions
// ---------------

// NOTE: YOU NEED THE STRING EQUIVALENT HERE OTHERWISE 
// SAGAS WILL FLIP OUT :( - LAAAAAAAMMMMMEEEE
export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
}

export interface LoginRequest {
  type: ActionTypes.LOGIN_REQUEST;
}

export interface LoginSuccess {
  type: ActionTypes.LOGIN_SUCCESS;
  idToken: string;
}

export interface LoginFailure {
  type: ActionTypes.LOGIN_FAILURE;
  error: string;
}

export interface Logout {
  type: ActionTypes.LOGOUT;
}

export type Action =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | Logout;

// ---------------
// Action Creators
// ---------------

export const loginRequest = (): LoginRequest => ({
  type: ActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (idToken: string): LoginSuccess => ({
  type: ActionTypes.LOGIN_SUCCESS,
  idToken,
});

export const loginFailure = (error: string): LoginFailure => ({
  type: ActionTypes.LOGIN_FAILURE,
  error,
});

export const logout = (): Logout => ({
  type: ActionTypes.LOGOUT,
});