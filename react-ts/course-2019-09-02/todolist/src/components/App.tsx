import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoType from "../TodoType";
import AddTodo from "./AddTodo";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import About from "./About";

import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([
    { id: 1, title: "learn React", completed: false },
    { id: 2, title: "groceries", completed: true }
  ]);

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, completed: true } : todo))
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAddTodo = (title: string) => {
    const highestId = todos.reduce(
      (accumulator, todo) => Math.max(accumulator, todo.id),
      0
    );

    setTodos([...todos, { id: highestId + 1, title, completed: false }]);
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <NavLink to="/" activeClassName="active-link" exact={true}>
          Home
        </NavLink>{" "}
        <NavLink to="/add" activeClassName="active-link">
          Add
        </NavLink>{" "}
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
      </div>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => (
            <TodoList
              todos={todos}
              onCompleted={handleCompleted}
              onDelete={handleDelete}
            />
          )}
        />
        <Route
          path="/add"
          exact={true}
          render={() => <AddTodo onAddTodo={handleAddTodo} />}
        />
        <Route path="/about" exact={true} component={About} />

        <Route path="/home" exact={true} render={() => <Redirect to="/" />} />
        <Route
          path="/add-todo"
          exact={true}
          render={() => <Redirect to="/add" />}
        />

        <Route path="/" render={() => <h2>Not Found</h2>} />
      </Switch>
    </div>
  );
};

export default App;
