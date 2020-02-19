import React from "react";
import { Todo } from "./Todo";
import "./TodoItem.css";

type TodoListProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map(todo => (
        <li
          key={todo.id}
          className={"todo" + (todo.completed ? " completed" : "")}
          onClick={() => {
            // trigger an onToggle event
            props.onToggle(todo.id);
          }}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
