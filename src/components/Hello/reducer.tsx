// Adding a reducer

// We're ready to write our first reducer! Reducers are just functions 
// that generate changes by creating modified copies of our application's 
// state, but that have no side effects.In other words, they're what we 
// call pure functions.

// Our reducer will go under src/ reducers / index.tsx.Its function will 
// be to ensure that increments raise the enthusiasm level by 1, and 
// that decrements reduce the enthusiasm level by 1, but that the level 
// never falls below 1.

import { Reducer } from 'redux';

import { Action } from './Actions';
import ActionTypes from './ActionTypes';

import { StateProps as HelloState } from './Hello';

export const initialState: HelloState = {
  enthusiasmLevel: 1,
  name: 'Typescript',
};

// Just renaming the StateProps from the Hello Component
export type HelloState = HelloState;

export const reducer: Reducer<HelloState> = (state = initialState, action: Action) => {
  const val = state.enthusiasmLevel === undefined ? 0 : state.enthusiasmLevel as number;

  switch (action.type) {
    case ActionTypes.INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: val + 1 };
    case ActionTypes.DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, val - 1) };
    case ActionTypes.INCREMENT_BY_ENTHUSIASM:
      return { ...state, enthusiasmLevel: val + action.by };
    case ActionTypes.DECREMENT_BY_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, val - action.by) };
    default:
      return state;
  }
};

export default reducer;

/*
export default function reducer(state: HelloState = initialState, action: Action): HelloState {
  const val = state.enthusiasmLevel === undefined ? 0 : state.enthusiasmLevel as number;

  // tslint:disable-next-line:switch-default
  switch (action.type) {
    case ActionTypes.INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: val + 1 };
    case ActionTypes.DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, val - 1) };
    case ActionTypes.INCREMENT_BY_ENTHUSIASM:
      return { ...state, enthusiasmLevel: val + action.by };
    case ActionTypes.DECREMENT_BY_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, val - action.by) };
  }
  return state;
}
*/

// Notice that we're using the object spread (...state) which allows us to 
// create a shallow copy of our state, while replacing the enthusiasmLevel. 
// It's important that the enthusiasmLevel property come last, since otherwise 
// it would be overridden by the property in our old state.

// You may want to write a few tests for your reducer.Since reducers are 
// pure functions, they can be passed arbitrary data.For every input, 
// reducers can tested by checking their newly produced state.
// Consider looking into Jest's toEqual method to accomplish this.

// source: https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript