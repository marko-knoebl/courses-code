import { combineReducers } from "redux";
import uiDataReducer from "./uiDataReducer";
import todosDataReducer from "./todosDataReducer";

const rootReducer = combineReducers({
  uiData: uiDataReducer,
  todosData: todosDataReducer
});

export default rootReducer;
