import { createStore } from 'redux';
import counterReducer from './counterReducer';

const counterStore = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default counterStore;
