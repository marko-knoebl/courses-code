import React from "react";
import { useSelector } from "react-redux";

const TodoDetails = ({ todoId }) => {
  const currentTodo = useSelector(state =>
    state.todosData.todos.find(todo => todo.id === Number(todoId))
  );
  return (
    <div>
      <h2>Details for Todo {todoId}</h2>
      <div>{currentTodo.title}</div>
    </div>
  );
};

export default TodoDetails;
