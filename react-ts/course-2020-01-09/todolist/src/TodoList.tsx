import React, { useContext } from "react";
import { TodoType } from "./TodoType";
import TodoItem from "./TodoItem";
import ThemeContext from "./ThemeContext";

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = props => {
  const theme = useContext(ThemeContext);
  return (
    <ul style={theme === "fancy" ? { border: "6px solid green" } : {}}>
      {props.todos.map(todo => (
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onDelete={() => {
            props.onDelete(todo.id);
          }}
          onToggle={() => {
            props.onToggle(todo.id);
          }}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
