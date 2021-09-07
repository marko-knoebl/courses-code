import { Container, Navbar } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import useTodos from "./useTodos";

function App() {
  const { todos, addTodo, setTodoStatus, deleteTodo, loadTodos } = useTodos();

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Todo</Navbar.Brand>
        </Container>
      </Navbar>

      <div>
        <button onClick={() => loadTodos()}>load todos from API</button>
      </div>

      <Container>
        <div>
          <NavLink to="/">Home</NavLink> <NavLink to="/add">Add Todo</NavLink>
        </div>

        <Routes>
          <Route
            path="/add"
            element={
              <AddTodo
                onTodoAdd={(newTitle: string) => {
                  addTodo(newTitle);
                  navigate("/");
                }}
              />
            }
          />

          <Route
            path="/"
            element={
              <ul>
                {todos.map((todo) => (
                  <TodoItem
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onCompletedChange={(completed) =>
                      setTodoStatus(todo.id, completed)
                    }
                    onDelete={() => deleteTodo(todo.id)}
                  />
                ))}
              </ul>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
