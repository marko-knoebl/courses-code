import { createStore } from "redux";
import rootReducer from "./rootReducer";

// Erstelle einen store basierend auf dem counter-reducer
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
