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

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { decrement, decrementBy, increment, incrementBy } from './ActionCreators';
// import Hello, { DispatchProps, StateProps } from './Hello';
import Hello, { DispatchProps } from './Hello';

import { AppState } from '../../rootReducer';

/*
const mapStateToProps = (state, ownProps) => ({
  geod: state.geod,
});
*/

function mapStateToProps({ hello }: AppState) {
  return { ...hello };
}

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>): DispatchProps => ({
  onDecrement: bindActionCreators(decrement, dispatch),
  onDecrementBy: bindActionCreators(decrementBy, dispatch),
  onIncrement: bindActionCreators(increment, dispatch),
  onIncrementBy: () => dispatch(incrementBy(10)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);