// Let's start off by creating a set of message types that our app 
// can respond to in src/constants/index.tsx.

// This const/type pattern allows us to use TypeScript's string literal 
/// types in an easily accessible and refactorable way.

export enum TypeKeys {
  INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM',
  DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM',
  INCREMENT_BY_ENTHUSIASM = 'INCREMENT_BY_ENTHUSIASM',
  DECREMENT_BY_ENTHUSIASM = 'DECREMENT_BY_ENTHUSIASM',
  OTHER_ACTION = '__any_other_action_type__'
}