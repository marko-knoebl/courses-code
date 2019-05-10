import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const rootStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

export default rootStore;
