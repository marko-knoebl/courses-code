import { combineReducers } from 'redux';

import tododata from './tododata/reducer';

const rootReducer = combineReducers({ tododata });

export default rootReducer;
