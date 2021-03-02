import { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Todo } from "./Todo";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { fetchTodos } from "./todosApi";
import { NavLink, Route, Routes } from "react-router-dom";
import Stats from "./Stats";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function loadFromLocalStorage() {
    const todosStr = localStorage.getItem("todos");
    if (todosStr !== null) {
      const lsTodos = JSON.parse(todosStr);
      setTodos(lsTodos);
    }
  }
  useEffect(loadFromLocalStorage, []);

  function saveToLocalStorage() {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  useEffect(saveToLocalStorage, [todos]);

  function deleteTodo(todo: Todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  function handleCheckedChange(todo: Todo, checked: boolean) {
    // behalte die meisten Einträge in todos bei,
    // ändere einen Eintrag ab
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        // ändern
        return { ...t, completed: checked };
      } else {
        // unverändert beibehalten
        return t;
      }
    });
    setTodos(newTodos);
  }

  function handleAdd(newTitle: string) {
    const newTodos = [
      ...todos,
      {
        id: Math.max(...todos.map((t) => t.id), 0) + 1,
        title: newTitle,
        completed: false,
      },
    ];
    setTodos(newTodos);
  }

  async function loadTodosAsync() {
    const todos = await fetchTodos();
    setTodos(todos);
  }

  function loadTodos() {
    fetchTodos().then((todos) => {
      setTodos(todos);
    });
  }
  // useEffect(() => {
  //   loadTodosAsync();
  // }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <h1>Todo</h1>
        </Toolbar>
      </AppBar>
      <NavLink to="/">home</NavLink>{" "}
      <NavLink to="/stats/en">statistics</NavLink>{" "}
      <NavLink to="/stats/de">Statistik</NavLink>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <button onClick={loadTodosAsync}>
                load todos from API (async)
              </button>
              <button onClick={loadTodos}>load todos from API (promise)</button>
              <button onClick={loadFromLocalStorage}>
                load todos from localStorage
              </button>
              <ul>
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onCheckedChange={(checked) =>
                      handleCheckedChange(todo, checked)
                    }
                    onDelete={() => deleteTodo(todo)}
                  />
                ))}
              </ul>
              <AddTodo
                onAddTodo={(newTitle) => {
                  handleAdd(newTitle);
                }}
              />
            </div>
          }
        />
        <Route path="/stats/:lang" element={<Stats todos={todos} />} />
      </Routes>
    </div>
  );
}

export default App;
