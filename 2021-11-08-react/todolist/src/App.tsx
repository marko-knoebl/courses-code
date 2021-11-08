import { useState } from "react";
import { Todo } from "./types";

const INITIAL_TODOS: Array<Todo> = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true },
];

function App() {
  // state
  const [todos, setTodos] = useState<Array<Todo>>(INITIAL_TODOS);

  // functions that manage state
  function addTodo(newTitle: string): void {
    let maxId = 0;
    for (let todo of todos) {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    }
    setTodos([...todos, { id: maxId + 1, title: newTitle, completed: false }]);
  }

  function deleteTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function setTodoCompleted(id: number, completed: boolean): void {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }
        return todo;
      })
    );
  }

  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="App">
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) =>
                setTodoCompleted(todo.id, event.target.checked)
              }
            />
            {todo.completed ? "DONE" : "TODO"}: {todo.title}{" "}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(newTitle);
          setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default App;
