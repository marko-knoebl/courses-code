import React, { useState, useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import { Todo } from "./Todo";
import AddTodo from "./AddTodo";
import { Route, NavLink, Switch } from "react-router-dom";
import ThemeContext, { Theme } from "./ThemeContext";
import todosReducer from "./todosReducer";

const initialTodos: Array<Todo> = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false },
];

function TodoApp() {
  const [rTodos, dispatch] = useReducer(todosReducer, initialTodos);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>("light");
  const loadTodos = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((pokemonData: { results: Array<any> }) => {
        const todoData = pokemonData.results.map((pokemon, idx) => ({
          id: idx,
          title: pokemon.name,
          completed: false,
        }));
        dispatch({ type: "setTodos", payload: todoData });
        setIsLoading(false);
      });
  };
  useEffect(loadTodos, []);
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h2>Todo</h2>
        <button
          onClick={() => {
            // alle todos löschen
            // auslösen der action: {type: "setTodos", payload: []}
            dispatch({ type: "setTodos", payload: [] });
          }}
        >
          delete all
        </button>
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          light
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
        >
          dark
        </button>
        <div>
          <NavLink to="/">Home</NavLink> <NavLink to="/add">Add</NavLink>
        </div>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => {
              if (!isLoading) {
                return (
                  <TodoList
                    todos={rTodos}
                    onToggle={(id) => {
                      dispatch({ type: "toggleTodo", payload: id });
                    }}
                    onDelete={(id) => {
                      dispatch({ type: "deleteTodo", payload: id });
                    }}
                  />
                );
              } else {
                return <div>loading ...</div>;
              }
            }}
          />
          <Route
            path="/add"
            exact={true}
            render={() => (
              <AddTodo
                onAddTodo={(title) => {
                  dispatch({ type: "addTodo", payload: title });
                }}
              />
            )}
          />
          <Route
            path="/"
            exact={false}
            render={() => (
              <div>
                <h2>not found</h2>
              </div>
            )}
          />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default TodoApp;
