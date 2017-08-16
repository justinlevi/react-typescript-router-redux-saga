// Next, we'll create a set of actions and functions that can create these 
// actions in src/actions/index.tsx.

import * as constants from '../constants';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}

// We've created two types that describe what increment actions and 
// decrement actions should look like. We also created a type (EnthusiasmAction) 
// to describe cases where an action could be an increment or a decrement. Finally, we made two functions that actually manufacture the actions which we can use instead of writing out bulky object literals.

// There's clearly boilerplate here, so you should feel free to look 
// into libraries like redux-actions once you've got the hang of things.