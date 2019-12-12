import { combineReducers } from "redux";

import todosReducer from "./todosReducer";

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case "LOAD_TODOS_REQUEST":
      return true;
    case "LOAD_TODOS_SUCCESS":
      return false;
    case "LOAD_TODOS_ERROR":
      return false;
    default:
      return state;
  }
};

const hasErrrorReducer = (state = false, action) => {
  switch (action.type) {
    case "LOAD_TODOS_ERROR":
      return true;
    case "LOAD_TODOS_SUCCESS":
      return false;
    default:
      return state;
  }
};

const todosDataReducer = combineReducers({
  todos: todosReducer,
  isLoading: isLoadingReducer,
  hasError: hasErrrorReducer
});

const todosDataReducerManual = (state, action) => {
  return {
    todos: todosReducer(state.todos, action),
    isLoading: isLoadingReducer(state.isLoading, action),
    hasError: hasErrrorReducer(state.hasError, action)
  };
};

export { isLoadingReducer, hasErrrorReducer };

export default todosDataReducer;
