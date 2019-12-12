import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const todosStore = configureStore({ reducer: rootReducer });

export default todosStore;
