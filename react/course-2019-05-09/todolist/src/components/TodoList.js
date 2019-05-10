import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          todo={todo}
          onToggle={id => {
            props.onToggle(id);
          }}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
