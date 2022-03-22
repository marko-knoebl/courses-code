import { Box, Button } from "@mui/material";
import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  // functions that manage todos
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(title: string): void {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }
  function setTodoCompleted(id: number, completed: boolean): void {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: completed } : todo
    );
    setTodos(newTodos);
  }
  function removeTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // code that handles form UI
  const [newTitle, setNewTitle] = useState<string>("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    addTodo(newTitle);
    setNewTitle("");
  }

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* flexbox - siehe https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: 400,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  backgroundColor: "lightblue",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(event) =>
                      setTodoCompleted(todo.id, event.target.checked)
                    }
                  />
                  {todo.completed ? "DONE" : "TODO"}: {todo.title}
                </div>
                <Button onClick={() => removeTodo(todo.id)} color="secondary">
                  delete
                </Button>
              </Box>
            </Box>
          </li>
        ))}
      </ul>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          new title:{" "}
          <input
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        </label>
        <Button type="submit" variant="contained" color="secondary">
          Add
        </Button>
      </form>
    </div>
  );
}

export default App;
