import React from "react";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";

function TodoListContainer() {
  const todos = useSelector(state => state.todosData.todos);
  const dispatch = useDispatch();
  return (
    <TodoList
      todos={todos}
      toggleTodo={id => dispatch({ type: "TOGGLE_TODO", id: id })}
      deleteTodo={id =>
        dispatch({
          type: "DELETE_TODO",
          id: id
        })
      }
    />
  );
}

export default TodoListContainer;
