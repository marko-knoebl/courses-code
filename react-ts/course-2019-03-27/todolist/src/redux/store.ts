import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const myLogger = store => next => action => {
//   console.log(action);
//   next(action)
// }

const todosStore = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default todosStore;
