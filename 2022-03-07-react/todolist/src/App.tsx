import { NavLink, Route, Routes } from "react-router-dom";
import AboutView from "./AboutView";
import AddTodo from "./AddTodo";
import Stats from "./Stats";
import TodoItem from "./TodoItem";
import { useTodos } from "./useTodos";

function App() {
  const { todos, isLoading, addTodo, setTodoCompleted, removeTodo, loadTodos } =
    useTodos();

  // potential validation
  let hasK = false;
  for (let todo of todos) {
    if (todo.title.includes("k")) {
      hasK = true;
    }
  }

  if (hasK) {
    return <div>No k allowed in titles</div>
  }

  return (
    <div>
      <h1>Todo</h1>
      <NavLink to="/">home</NavLink> <NavLink to="/about">about</NavLink>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                <button onClick={() => loadTodos()}>load Todos from API</button>
              </div>
              {isLoading ? <div>loading ...</div> : null}
              <Stats todos={todos} />
              <ul>
                {todos.map((todo) => (
                  <TodoItem
                    todo={todo}
                    onDelete={(id) => removeTodo(id)}
                    onChangeCompleted={(id, completed) =>
                      setTodoCompleted(id, completed)
                    }
                  />
                ))}
              </ul>

              <AddTodo onAdd={(newTitle) => addTodo(newTitle)} />
              <Stats todos={todos} />
            </div>
          }
        />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
