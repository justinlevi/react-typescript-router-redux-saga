import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

import { configureStore } from './configureStore';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

// tslint:disable-next-line:no-namespace
declare global {
  interface Window {
    // tslint:disable-next-line:no-any
    devToolsExtension: any;
  }
}

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
