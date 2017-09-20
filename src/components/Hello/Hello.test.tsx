import * as enzyme from 'enzyme';
import * as React from 'react';

import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" onIncrement={() => {}} onDecrement={() => {}} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  // tslint:disable-next-line:max-line-length
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} onIncrement={() => { }} onDecrement={() => { }} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  // tslint:disable-next-line:max-line-length
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} onIncrement={() => { }} onDecrement={() => { }} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} onIncrement={() => { }} onDecrement={() => { }} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} onIncrement={() => { }} onDecrement={() => { }} />);
  }).toThrow();
});