import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { Button, TextField } from "@material-ui/core";
import { Route, Switch, NavLink } from "react-router-dom";
import Rating from "./Rating";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos: Array<Todo> = [
  { id: 1, title: "React lernen", completed: false },
  { id: 2, title: "Einkaufen", completed: true },
];

type Action = {
  type: string;
  payload?: any;
};

function todosReducer(state: Array<Todo>, action: Action): Array<Todo> {
  switch (action.type) {
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "add":
      const newId = Math.max(...state.map((todo) => todo.id), 0) + 1;
      return [...state, { id: newId, title: action.payload, completed: false }];
    case "set":
      return action.payload;
    default:
      throw new Error("unknown action");
  }
}

function App() {
  //const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [loading, setLoading] = useState(false);
  const [newTitle, setNewTitle] = useState<string>("");

  function fetchTodos() {
    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((todos) => {
        setLoading(false);
        //setTodos(todos);
        dispatch({ type: "set", payload: todos });
      });
  }
  useEffect(fetchTodos, []);

  const [rating1, setRating1] = useState(3);

  const todoElements = todos.map((todo) => {
    let prefix;
    if (todo.completed) {
      prefix = "DONE: ";
    } else {
      prefix = "TODO: ";
    }
    return (
      <li
        key={todo.id}
        className={todo.completed ? "todoitem completed" : "todoitem"}
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
      >
        {prefix + todo.title}
        <Button
          onClick={(event) => {
            event.stopPropagation();
            dispatch({ type: "delete", payload: todo.id });
          }}
        >
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}>
          <NavLink to="/todo">todos</NavLink>
          <h1>Playground</h1>
          <Rating stars={rating1} onChange={setRating1} />
        </Route>
        <Route path="/todo">
          <NavLink to="/">playground</NavLink>
          <h1>Todo</h1>
          {loading ? <div>loading...</div> : null}
          <ul>{todoElements}</ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setNewTitle("");
              dispatch({ type: "add", payload: newTitle });
            }}
          >
            <TextField
              value={newTitle}
              onChange={(event) => {
                setNewTitle(event.target.value);
              }}
              label="new todo"
            />
            <Button color="primary" variant="contained" type="submit">
              add
            </Button>
          </form>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
