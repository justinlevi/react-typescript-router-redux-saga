import ActionTypes from './ActionTypes';

export interface Increment {
  type: ActionTypes.INCREMENT_ENTHUSIASM;
}

export interface Decrement {
  type: ActionTypes.DECREMENT_ENTHUSIASM;
}

export interface IncrementBy {
  type: ActionTypes.INCREMENT_BY_ENTHUSIASM;
  by: number;
}

export interface DecrementBy {
  type: ActionTypes.DECREMENT_BY_ENTHUSIASM;
  by: number;
}

export interface Other {
  type: ActionTypes.OTHER_ACTION;
}

export type Action =
  | Increment
  | Decrement
  | IncrementBy
  | DecrementBy
  | Other;