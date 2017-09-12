import * as React from 'react';
import './hello.css';

export interface DispatchProps {
  onIncrement?: () => void;
  onDecrement?: () => void;
  onIncrementBy?: () => void;
  onDecrementBy?: () => void;
}

export interface StateProps {
  name: string;
  enthusiasmLevel?: number;
}

type HelloState = StateProps & DispatchProps;

const Hello: React.StatelessComponent<HelloState> = ({
  name, 
  enthusiasmLevel = 1, 
  onIncrement, 
  onDecrement, 
  onIncrementBy, 
  onDecrementBy }) => {
  
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        {'Hello ' + name + getExclamationMarks(enthusiasmLevel)}
      </div>

      {(onDecrement !== undefined || onIncrement !== undefined) &&
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      }

      {(onDecrementBy !== undefined || onIncrementBy !== undefined) &&
      <div>
        <button onClick={onDecrementBy}>--</button>
        <button onClick={onIncrementBy}>++</button>
      </div>
      }
    </div>
  );
};

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}