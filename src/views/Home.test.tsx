import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import { configureStore } from '../configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <Home />
    </Provider>, 
    div);
});
