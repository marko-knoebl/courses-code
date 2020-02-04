import React, { useState, FC, useEffect, useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { TodoType } from "./TodoType";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import todosReducer from "./todosReducer";

const initialTodos = [
  {
    id: 1,
    title: "learn React",
    completed: false
  },
  {
    id: 2,
    title: "groceries",
    completed: true
  }
];

const TodoApp: FC<{}> = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const loadTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(todos => {
        dispatch({ type: "receiveTodos", todos: todos });
      });
  };
  useEffect(loadTodos, []);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo</Typography>
        </Toolbar>
      </AppBar>
      <TodoList
        todos={todos}
        onToggle={id => {
          dispatch({ type: "toggleTodo", id: id });
        }}
      />
      <AddTodo
        onAddTodo={newTitle => {
          dispatch({ type: "addTodo", title: newTitle });
        }}
      />
    </div>
  );
};

export default TodoApp;
