import { useContext } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AboutView from "./AboutView";
import AddTodoView from "./AddTodoView";
import { ThemeContext } from "./ThemeContext";
import TodoList from "./TodoList";
import useTodos from "./useTodos";

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    setTodoCompleted,
    setTodoTitle,
    loadTodos,
    isLoading,
  } = useTodos();

  const themeContext = useContext(ThemeContext);

  return (
    <div className="App">
      <h1>Todo</h1>
      <NavLink to="/">home</NavLink> <NavLink to="/add">add</NavLink>{" "}
      <NavLink to="/about">about</NavLink>
      <br />
      <button onClick={() => themeContext?.changeTheme("dark")}>dark</button>
      <button onClick={() => themeContext?.changeTheme("light")}>light</button>
      <br />
      <AddTodoView onAddTodo={addTodo} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button onClick={() => loadTodos()}>load from API</button>
              {isLoading ? <div>loading...</div> : null}
              <TodoList
                todos={todos}
                onDeleteTodo={(id) => deleteTodo(id)}
                onCompletedChange={(id, completed) =>
                  setTodoCompleted(id, completed)
                }
                onTitleChange={(id, title) => setTodoTitle(id, title)}
              />
            </>
          }
        />
        <Route path="/add" element={<AddTodoView onAddTodo={addTodo} />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
