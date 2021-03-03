import { AppBar, Toolbar } from "@material-ui/core";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { NavLink, Route, Routes } from "react-router-dom";
import Stats from "./Stats";
import useTodos from "./useTodos";
import TodosContext from "./TodosContext";

function App() {
  const {
    todos,
    loadFromLocalStorage,
    deleteTodo,
    changeChecked,
    addTodo,
    loadTodosAsync,
    loadTodos,
  } = useTodos();

  return (
    <TodosContext.Provider
      value={{ todos: todos }}
    >
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
                <button onClick={loadTodos}>
                  load todos from API (promise)
                </button>
                <button onClick={loadFromLocalStorage}>
                  load todos from localStorage
                </button>
                <ul>
                  {todos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onCheckedChange={(checked) =>
                        changeChecked(todo, checked)
                      }
                      onDelete={() => deleteTodo(todo)}
                    />
                  ))}
                </ul>
                <AddTodo
                  onAddTodo={(newTitle) => {
                    addTodo(newTitle);
                  }}
                />
              </div>
            }
          />
          <Route path="/stats/:lang" element={<Stats />} />
        </Routes>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
