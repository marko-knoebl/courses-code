import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import { AppBar, Toolbar, Typography, TextField } from "@material-ui/core";
import { TodoType } from "./TodoType";
import TodoList from "./TodoList";
import TodoFromApi from "./TodoFromApi";
import ThemeContext from "./ThemeContext";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "taxes", completed: true }
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [apiTodoId, setApiTodoId] = useState(1);
  const [theme, setTheme] = useState("default");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodos = [
      ...todos,
      { id: todos[todos.length - 1].id + 1, title: newTitle, completed: false }
    ];
    setTodos(newTodos);
    setNewTitle("");
  };

  const handleToggle = (id: number) => {
    // change the todos - one item will be toggled
    setTodos(
      todos.map(t => {
        if (t.id === id) {
          // toggle the todo
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6">Todo</Typography>
          </Toolbar>
        </AppBar>

        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />

        <form onSubmit={handleSubmit}>
          <TextField
            value={newTitle}
            onChange={event => setNewTitle(event.target.value)}
            margin="normal"
            placeholder="todo title"
          />
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
        <div>
          <Button
            onClick={() => {
              setTodos(todos.filter(t => !t.completed));
            }}
            variant="contained"
          >
            delete completed todos
          </Button>
        </div>
        <h2>single todo from API</h2>
        <button onClick={() => setApiTodoId(apiTodoId - 1)}>prev</button>
        <TodoFromApi todoId={apiTodoId} />
        <button onClick={() => setApiTodoId(apiTodoId + 1)}>next</button>
        <h2>theme</h2>
        <button onClick={() => setTheme("default")}>default</button>
        <button onClick={() => setTheme("fancy")}>fancy</button>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
