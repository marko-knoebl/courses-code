import React from "react";
import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={props.onToggle}
          onDelete={props.onDelete}
        ></TodoItem>
      ))}
    </ul>
  );
}

export default TodoList;
