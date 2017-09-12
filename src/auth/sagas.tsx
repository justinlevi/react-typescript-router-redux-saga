import { push } from 'react-router-redux';
import { delay } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

import {
  ActionTypes,
  // loginFailure,
  loginSuccess,
} from './Actions';

export function* loginRequestSaga() {
  yield put({type: ActionTypes.LOGIN_REQUEST});
  yield call(delay, 500);
  yield put(loginSuccess('asbasdfa'));
  console.log('loginRequestSaga!');
}

/*
  while (true) {
    yield take(LOGIN_REQUEST);
    yield call(loginRequestSaga);
  }
  */
export function* watchLoginRequest() {
  console.log('watchLoginRequest!');
  yield take(ActionTypes.LOGIN_REQUEST);
  yield call(loginRequestSaga);
}

export function* watchLoginSuccess() {
  yield take(ActionTypes.LOGIN_SUCCESS);
  console.log('HUGE SUCCESS!');
}

export function* watchLoginFailure() {
  yield take(ActionTypes.LOGIN_FAILURE);
  console.log('DAMMIT - SHIT FAILED YO');
}

export function* watchLogout() {
  yield take(ActionTypes.LOGOUT);
  
  console.log('LOGOUT');

  yield put(push('/'));
}