// The real two key pieces here are the original Hello component as 
// well as the connect function from react- redux.connect will be 
// able to actually take our original Hello component and turn it 
// into a container using two functions:

//     - `mapStateToProps` which massages the data from the current store to part of the shape that our component needs.
//     - `mapDispatchToProps` which creates callback props to pump actions to our store using a given dispatch function.
// If we recall, our application state consists of two properties: 
// languageName and enthusiasmLevel.Our Hello component, on the 
// other hand, expected a name and an enthusiasmLevel.
// mapStateToProps will get the relevant data from the store, 
// and adjust it if necessary, for our component's props. 

import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
import Hello from '../components/Hello';
import { StoreState } from '../types';

function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

// Note that mapStateToProps only creates 2 out of 4 of the properties 
// a Hello component expects.Namely, we still want to pass in the 
// onIncrement and onDecrement callbacks.mapDispatchToProps is a 
// function that takes a dispatcher function. This dispatcher function 
// can pass actions into our store to make updates, so we can create 
// a pair of callbacks that will call the dispatcher as necessary.

function mapDispatchToProps(dispatch: Dispatch<string>) {
  return {
    onDecrement: () => dispatch(actions.decrement()),
    onDecrementBy: () => dispatch(actions.decrementBy(10)),
    onIncrement: () => dispatch(actions.increment()),
    onIncrementBy: () => dispatch(actions.incrementBy(10)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);