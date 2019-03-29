import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  todoData: todosReducer
});

export default rootReducer;
