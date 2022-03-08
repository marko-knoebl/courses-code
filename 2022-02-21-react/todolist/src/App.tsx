import { NavLink, Route, Routes } from "react-router-dom";

import AboutView from "./AboutView";
import AddTodo from "./AddTodoView";
import TodoListView from "./TodoListView";

import useTodos from "./useTodos";

function App() {
  const { todos, addTodo, setTodoCompleted, deleteTodo, isLoading, loadTodos } =
    useTodos();
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <NavLink to="/">home</NavLink> <NavLink to="/add">add</NavLink>{" "}
        <NavLink to="/about">about</NavLink>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <TodoListView
              todos={todos}
              onCompletedChange={(id, completed) =>
                setTodoCompleted(id, completed)
              }
              onDelete={(id) => deleteTodo(id)}
              onLoadTodos={() => loadTodos()}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/add"
          element={<AddTodo onAdd={(title) => addTodo(title)} />}
        />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
