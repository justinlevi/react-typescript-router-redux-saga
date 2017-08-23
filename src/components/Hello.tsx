import * as React from 'react';
import './Hello.css';

export interface HelloProps {
  name: string;
  enthusiasmLevel?: number;

  // let's update the props interface so that it can modify state. 
  // We'll add two optional callback properties to Props named onIncrement 
  // and onDecrement:

  onIncrement?: () => void;
  onDecrement?: () => void;

  onIncrementBy?: () => void;
  onDecrementBy?: () => void;
}

function Hello({ 
  name, enthusiasmLevel = 1, onIncrement, onDecrement, onIncrementBy, onDecrementBy}: HelloProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        {name + ' HELL' + getExclamationMarks(enthusiasmLevel)}
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
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}