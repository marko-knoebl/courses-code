import { useEffect, useState } from "react";
import "./App.css";
import Statistics from "./Statistics";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  const [newTitle, setNewTitle] = useState("");

  // idle / loading / success / error
  const [apiStatus, setApiStatus] = useState("idle");

  function addTodo() {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: newTitle, completed: false }]);
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      })
    );
  }

  async function loadTodos() {
    setApiStatus("loading");
    try {
      const todos = await fetchTodos();
      setTodos(todos);
      setApiStatus("success");
    } catch {
      setApiStatus("error");
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo</h1>

      <button onClick={() => loadTodos()}>load todos from API</button>

      {apiStatus === "loading" ? <div>loading...</div> : null}
      {apiStatus === "error" ? <div>error</div> : null}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo();
          setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={setTodoCompleted}
            onDelete={removeTodo}
          />
        ))}
      </ul>
      <Statistics todos={todos} />
    </div>
  );
}

export default App;
