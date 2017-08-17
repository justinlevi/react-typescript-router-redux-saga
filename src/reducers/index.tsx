// Adding a reducer

// We're ready to write our first reducer! Reducers are just functions 
// that generate changes by creating modified copies of our application's 
// state, but that have no side effects.In other words, they're what we 
// call pure functions.

// Our reducer will go under src/ reducers / index.tsx.Its function will 
// be to ensure that increments raise the enthusiasm level by 1, and 
// that decrements reduce the enthusiasm level by 1, but that the level 
// never falls below 1.

import { EnthusiasmAction } from '../actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/index';
import { StoreState } from '../types/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  // tslint:disable-next-line:switch-default
  switch (action.type) {
    case INCREMENT_ENTHUSIASM: 
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM: 
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}

// Notice that we're using the object spread (...state) which allows us to 
// create a shallow copy of our state, while replacing the enthusiasmLevel. 
// It's important that the enthusiasmLevel property come last, since otherwise 
// it would be overridden by the property in our old state.

// You may want to write a few tests for your reducer.Since reducers are 
// pure functions, they can be passed arbitrary data.For every input, 
// reducers can tested by checking their newly produced state.
// Consider looking into Jest's toEqual method to accomplish this.
