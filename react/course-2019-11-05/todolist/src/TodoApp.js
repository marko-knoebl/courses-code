import React, { useReducer } from "react";
import "./TodoApp.css";

import todosReducer from "./todosReducer";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function TodoApp() {
  const [todos, dispatchAction] = useReducer(todosReducer, [
    { id: 1, title: "groceries", completed: true },
    { id: 2, title: "gardening", completed: false }
  ]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoList
        todos={todos}
        toggleTodo={id => dispatchAction({ type: "TOGGLE_TODO", id: id })}
        deleteTodo={id =>
          dispatchAction({
            type: "DELETE_TODO",
            id: id
          })
        }
      />
      <div>
        <button onClick={() => dispatchAction({ type: "DELETE_COMPLETED" })}>
          delete completed todos
        </button>
      </div>
      <AddTodo
        addTodo={newTitle =>
          dispatchAction({
            type: "ADD_TODO",
            title: newTitle
          })
        }
      />
    </div>
  );
}

export default TodoApp;

// TODO: event "deleteTodo" between TodoItem & TodoList
// TODO: event "deleteTodo" between TodoList & TodoApp
// TODO: action "DELETE_TODO" triggered from TodoApp

// TODO: AddTodo with internal state "newTitle"
// TODO: event "addTodo" between AddTodo & TodoApp
// TODO: action "ADD_TODO" triggered from TodoApp
