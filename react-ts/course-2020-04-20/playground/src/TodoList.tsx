import React, { useState } from "react";
import "./TodoList.css";
import styled from "styled-components";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos: Array<Todo> = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false },
];

type TodoItemProps = {
  completed?: boolean;
};

const TodoItem = styled.li`
  padding: 8px;
  background-color: ${(props: TodoItemProps) =>
    props.completed ? "lightgrey" : "lightsalmon"};
  text-decoration: ${(props: TodoItemProps) =>
    props.completed ? "line-through" : "none"};
`;

function TodoList() {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  return (
    <div>
      <h2>Active Todos</h2>
      <ul>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <TodoItem key={todo.id}>{todo.title}</TodoItem>
          ))}
      </ul>
      <h2>Todo (styled components)</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            {todo.completed ? "DONE: " : "TODO: "}
            {todo.title}
          </TodoItem>
        ))}
      </ul>
      <h2>Todo</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "todoitem completed" : "todoitem"}
          >
            {todo.completed ? "DONE: " : "TODO: "}
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
