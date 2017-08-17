import * as React from 'react';
import './App.css';
import Hello from './containers/Hello';

const logo = require('./logo.svg');

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Typescript',
});

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Provider store={store}>
          <Hello />
        </Provider>
      </div>
    );
  }
}

export default App;
