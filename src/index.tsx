import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { Routes } from './routes';

import { configureStore } from './configureStore';

// import './index.css';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = configureStore(history);

// tslint:disable-next-line:no-namespace
declare global {
  interface Window {
    // tslint:disable-next-line:no-any
    devToolsExtension: any;
  }
}

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();