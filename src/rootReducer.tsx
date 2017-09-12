import { combineReducers } from 'redux';
import recycleState from 'redux-recycle';

import helloReducer, 
{ 
  HelloState, 
  initialState as helloInitialState,
} from './components/Hello/reducer';

import authReducer, { AuthState } from './auth/reducer';

export interface AppState {
  auth: AuthState;
  hello: HelloState;
}

// const initialAppState: AppState = {
//   hello: helloInitialState
// };

export const rootReducer = combineReducers<AppState>({
  auth: authReducer,
  hello: recycleState(helloReducer, [], helloInitialState),
});

export default rootReducer;