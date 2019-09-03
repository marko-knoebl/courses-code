import React from "react";
import TodoType from "../TodoType";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<TodoType>;
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onCompleted, onDelete }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCompleted={onCompleted}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
