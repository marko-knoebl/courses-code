import rootReducer from './reducer';

import thunk from 'redux-thunk';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
