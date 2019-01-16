import counter from "./counterReducer";
import mathador from "./mathadorReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({ c: counter, m: mathador });

export default rootReducer;
