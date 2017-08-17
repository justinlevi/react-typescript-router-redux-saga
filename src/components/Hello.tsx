import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;

  // let's update the props interface so that it can modify state. 
  // We'll add two optional callback properties to Props named onIncrement 
  // and onDecrement:

  onIncrement: () => void;
  onDecrement: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        {name + ' HELL' + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}