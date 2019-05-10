import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import todosReducer from "./todosReducer";

const todosStore = createStore(
  todosReducer,
  composeWithDevTools(applyMiddleware())
);

export default todosStore;
