import { Decrement, DecrementBy, Increment, IncrementBy } from './Actions';
import ActionTypes from './ActionTypes';

export function increment(): Increment {
  return {
    type: ActionTypes.INCREMENT_ENTHUSIASM,
  };
}

export function decrement(): Decrement {
  return {
    type: ActionTypes.DECREMENT_ENTHUSIASM,
  };
}

export function incrementBy(value: number = 5): IncrementBy {
  return {
    by: value,
    type: ActionTypes.INCREMENT_BY_ENTHUSIASM,
  };
}

export function decrementBy(value: number = 5): DecrementBy {
  return {
    by: value,
    type: ActionTypes.DECREMENT_BY_ENTHUSIASM,
  };
}