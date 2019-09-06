import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return todos.map(todo => (
    <TodoItem
      todo={todo}
      key={todo.id}
      onToggle={id => {
        dispatch({ type: "TOGGLE_TODO", id });
      }}
    />
  ));
}

export default TodoList;
