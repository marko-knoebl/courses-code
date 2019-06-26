import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  ui: uiReducer
});

export default rootReducer;
