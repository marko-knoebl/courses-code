import { createStore, applyMiddleware, compose } from 'redux';
import todosReducer from './todosReducer';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todosReducer, composeEnhancers(applyMiddleware()));

export default store;
