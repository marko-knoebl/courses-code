import React, { useState } from "react";
import { TodoType } from "./TodoType";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (todoId: number) => void;
};

const TodoList = (props: TodoListProps) => {
  const [filterText, setFilterText] = useState("");

  const filteredTodos = props.todos.filter(todo =>
    todo.title.includes(filterText)
  );

  return (
    <div>
      filter:{" "}
      <input
        value={filterText}
        onChange={event => {
          setFilterText(event.target.value);
        }}
      />
      <ul style={{ maxHeight: 500, overflow: "auto" }}>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={() => {
              props.onToggle(todo.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
