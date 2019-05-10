import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import newTodoTitleReducer from "./newTodoTitleReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  newTodoTitle: newTodoTitleReducer
});

export default rootReducer;
