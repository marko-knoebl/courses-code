import { createStore } from 'redux';
import countReducer from './countReducer';

// erstelle einen store, der von einem reducer verwaltet wird
const countStore = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default countStore;
