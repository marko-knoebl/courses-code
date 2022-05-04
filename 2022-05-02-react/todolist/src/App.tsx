import { useEffect, useState } from "react";
import { Todo } from "./types";
import "./App.css";
import Statistics from "./Statistics";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./todosApi";

export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "foo", completed: false },
    { id: 5, title: "bar", completed: true },
  ]);

  function addTodo(title: string): void {
    const maxId = Math.max(0, ...todos.map((todo) => todo.id));
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }

  function changeTodoCompleted(id: number, completed: boolean): void {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }

  function deleteTodo(id: number): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  /**
   * load todos from API and put them in the state
   */
  async function loadTodos() {
    setIsLoading(true);
    const todosFromApi = await fetchTodos();
    setTodos(todosFromApi);
    setIsLoading(false);
  }
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      loadTodos();
    },
    []
  )

  return (
    <div className="App">
      <h1>Todo</h1>
      {isLoading ? <div>Loading ...</div> : null}
      <button onClick={() => loadTodos()}>load todos from API</button>
      <Statistics todos={todos} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onCompletedChange={(id, completed) =>
              changeTodoCompleted(id, completed)
            }
            onDelete={(id) => deleteTodo(id)}
          />
        ))}
      </ul>
      <AddTodo onAdd={(title) => addTodo(title)} />
    </div>
  );
}
