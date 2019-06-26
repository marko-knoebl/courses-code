import { TodoType } from "../TodoType";

export type AddTodo = {
  type: "ADD_TODO";
  title: string;
};

export type ToggleTodo = {
  type: "TOGGLE_TODO";
  id: number;
};

export type DeleteTodo = {
  type: "DELETE_TODO";
  id: number;
};

export type DeleteAllCompleted = {
  type: "DELETE_ALL_COMPLETED";
};

export type NewTitleChanged = {
  type: "NEW_TITLE_CHANGED";
  title: string;
};

export type LoadTodosSuccess = {
  type: "LOAD_TODOS_SUCCESS";
  todos: Array<TodoType>;
};

export type TodolistAction =
  | AddTodo
  | ToggleTodo
  | DeleteTodo
  | DeleteAllCompleted
  | NewTitleChanged
  | LoadTodosSuccess;
