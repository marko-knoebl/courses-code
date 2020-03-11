import React, { useState } from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoList(props: TodoListProps) {
  const [filterStatus, setFilterStatus] = useState<
    "all" | "completed" | "active"
  >("all");
  const [filterText, setFilterText] = useState("");

  const filteredTodos = props.todos
    .filter(todo => {
      if (filterStatus === "all") {
        return true;
      } else if (filterStatus === "completed") {
        return todo.completed === true;
      } else {
        return todo.completed === false;
      }
    })
    .filter(todo => todo.title.includes(filterText));

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="checkbox-all"
          checked={filterStatus === "all"}
          onChange={event => {
            if (event.target.checked === true) {
              setFilterStatus("all");
            }
          }}
        />
        <label htmlFor="checkbox-all">all</label>
        <input
          type="checkbox"
          id="checkbox-completed"
          checked={filterStatus === "completed"}
          onChange={event => {
            if (event.target.checked === true) {
              setFilterStatus("completed");
            }
          }}
        />
        <label htmlFor="checkbox-completed">completed</label>
        <input
          type="checkbox"
          id="checkbox-active"
          checked={filterStatus === "active"}
          onChange={event => {
            if (event.target.checked === true) {
              setFilterStatus("active");
            }
          }}
        />
        <label htmlFor="checkbox-active">active</label>
        <br />
        <input
          value={filterText}
          onChange={event => {
            setFilterText(event.target.value);
          }}
        />
      </div>
      filter type: {filterStatus}
      <div style={{ overflow: "auto", maxHeight: "70vh" }}>
        {filteredTodos.map(todo => (
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            onToggle={() => {
              props.onToggle(todo.id);
            }}
            onDelete={() => {
              props.onDelete(todo.id);
            }}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
