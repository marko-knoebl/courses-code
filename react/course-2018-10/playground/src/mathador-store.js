import { createStore } from 'redux';
import mathadorReducer from './mathador-reducer';

const mathadorStore = createStore(
  mathadorReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.mathadorStore = mathadorStore;

export default mathadorStore;
