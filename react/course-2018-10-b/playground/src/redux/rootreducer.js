import { combineReducers } from 'redux';

import counter from './counter/reducer';
import mathador from './mathador/reducer';

const rootReducer = combineReducers({
  counter: counter,
  mathador: mathador
});

export default rootReducer;
