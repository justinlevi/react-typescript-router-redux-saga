import { delay } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { 
  watchLoginFailure, 
  watchLoginRequest, 
  watchLoginSuccess, 
  watchLogout 
} from './auth/sagas';

// Our worker Saga: will perform the async increment task
export function* helloSaga() {
  yield call(delay, 1000);
  // tslint:disable-next-line:no-console
  console.log('Hello Sagas!');
}

// export function* watchLoginRequest() {
//   yield call(delay, 1000);
//   console.log('LOGIN REQUEST');
// }

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchLoginRequest(),
    watchLoginSuccess(),
    watchLoginFailure(),
    watchLogout(),
  ]);
}