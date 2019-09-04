import todosReducer from "./todosReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  todosReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
