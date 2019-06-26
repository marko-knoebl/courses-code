import React from "react";
import { TodoType } from "../TodoType";
import "./TodoItem.css";

type TodoItemProps = {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <li
      key={props.todo.id}
      className={props.todo.completed ? "todo completed" : "todo"}
      onClick={() => {
        props.toggleTodo(props.todo.id);
      }}
    >
      {props.todo.completed ? "DONE: " : "TODO: "}
      {props.todo.title}
      <button onClick={() => {
        props.deleteTodo(props.todo.id)
      }}>X</button>
    </li>
  );
};

export default TodoItem;
