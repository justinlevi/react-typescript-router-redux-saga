import { combineReducers } from 'redux';
import recycleState from 'redux-recycle';

import helloReducer, 
{ 
  HelloState, 
  initialState as helloInitialState,
} from './components/Hello/reducer';

export interface AppState {
  hello: HelloState;
}

// const initialAppState: AppState = {
//   hello: helloInitialState
// };

export const rootReducer = combineReducers<AppState>({
  hello: recycleState(helloReducer, [], helloInitialState)
});

export default rootReducer;