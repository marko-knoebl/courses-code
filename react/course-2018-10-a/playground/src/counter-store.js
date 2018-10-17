// stores.js
import { createStore } from 'redux';
import counterReducer from './counter-reducer';
// counter = reducer
const counterStore = createStore(counterReducer);

window.counterStore = counterStore;

export default counterStore;
