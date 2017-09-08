import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// import helloReducer, { HelloState } from './components/Hello/reducer';

export function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const middleware =  window.devToolsExtension ?
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension(),
    ) :
    applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    middleware,
  );

  // store = createStore<HelloState>(helloReducer, {
  //   enthusiasmLevel: 1,
  //   name: 'Typescript',
  // });

  sagaMiddleware.run(rootSaga);

  return store;
}
