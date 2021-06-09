import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import AddTodoClass from "./AddTodoClass";
import { NavLink, Route, Routes } from "react-router-dom";
import AboutView from "./AboutView";
import useTodos from "./useTodos";
import ThemeContext from "./ThemeContext";
import Settings from "./Settings";

function App() {
  const { todos, addTodo, setTodoState, deleteTodo, loadTodos, isLoading } =
    useTodos();

  const [theme, setTheme] = useState<"default" | "dark">("default");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Todo</h1>
        <nav>
          <NavLink to="/">home</NavLink> <NavLink to="/about">about</NavLink>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Settings theme={theme} setTheme={setTheme} />
                <button
                  onClick={async () => {
                    loadTodos();
                    console.log("fin")
                  }}
                >
                  load todos from API
                </button>
                {isLoading ? <div>loading...</div> : null}
                <ul>
                  {todos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      title={todo.title}
                      isCompleted={todo.completed}
                      onDelete={() => deleteTodo(todo.id)}
                      onCompletedChange={(completed) =>
                        setTodoState(todo.id, completed)
                      }
                    />
                  ))}
                </ul>
                <AddTodo onAddition={(newTitle) => addTodo(newTitle)} />
                <AddTodoClass onAddition={(newTitle) => addTodo(newTitle)} />
              </>
            }
          />
          <Route path="/about" element={<AboutView />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
