// Next, we'll create a set of actions and functions that can create these 
// actions in src/actions/index.tsx.

import { TypeKeys } from '../constants';

// We've created two types that describe what increment actions and 
// decrement actions should look like. We also created a type (EnthusiasmAction) 
// to describe cases where an action could be an increment or a decrement. Finally, 
// we made two functions that actually manufacture the actions which we can use 
// instead of writing out bulky object literals.

// There's clearly boilerplate here, so you should feel free to look 
// into libraries like redux-actions once you've got the hang of things.

export interface Increment {
  type: TypeKeys.INCREMENT_ENTHUSIASM;
}

export interface Decrement {
  type: TypeKeys.DECREMENT_ENTHUSIASM;
}

export interface IncrementBy {
  type: TypeKeys.INCREMENT_BY_ENTHUSIASM;
  by: number;
}

export interface DecrementBy {
  type: TypeKeys.DECREMENT_BY_ENTHUSIASM;
  by: number;
}

export interface Other {
  type: TypeKeys.OTHER_ACTION;
}

export type ActionTypes =
  | Increment
  | Decrement
  | IncrementBy
  | DecrementBy
  | Other;

export function increment(): Increment {
  return {
    type: TypeKeys.INCREMENT_ENTHUSIASM,
  };
}

export function decrement(): Decrement {
  return {
    type: TypeKeys.DECREMENT_ENTHUSIASM,
  };
}

export function incrementBy(value: number = 5): IncrementBy {
  return {
    by: value,
    type: TypeKeys.INCREMENT_BY_ENTHUSIASM, 
  };
}

export function decrementBy(value: number = 5): DecrementBy {
  return {
    by: value,
    type: TypeKeys.DECREMENT_BY_ENTHUSIASM,
  };
}