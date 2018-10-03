import { createStore, applyMiddleware } from 'redux';

import rootReducer from './root-reducer';
import myLogger from '../middleware/my-logger';

import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(myLogger, thunk)
);

export default store;
