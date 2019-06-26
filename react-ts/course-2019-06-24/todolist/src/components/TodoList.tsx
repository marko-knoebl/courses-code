import React from "react";
import { TodoType } from "../TodoType";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<TodoType>;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          todo={todo}
          toggleTodo={props.toggleTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
