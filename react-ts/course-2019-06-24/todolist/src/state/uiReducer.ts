import { TodolistAction } from "./actionTypes";

type UiState = {
  newTodoTitle: string;
};

const initialState: UiState = {
  newTodoTitle: ""
};

const uiReducer = (state: UiState = initialState, action: TodolistAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return { newTodoTitle: "" };
    case "NEW_TITLE_CHANGED":
      return {
        newTodoTitle: action.title
      };
    default:
      return state;
  }
};

export default uiReducer;
