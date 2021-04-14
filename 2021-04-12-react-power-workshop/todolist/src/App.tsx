import { useEffect, useReducer, useState } from "react";
import AddTodo from "./AddTodo";
import AddTodoClass from "./AddTodoClass";
import Rating from "./Rating";
import { Todo } from "./Todo";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./todosApi";
import { NavLink, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";

/*
Wir erstellen eine Todo-Anwendung mit der folgenden Funktionalität:

+ Anzeigen erledigter und nicht-erledigter Todos
+ Hinzufügen eines Todos mittels eines Formulars
+ Umschalten des erledigt-Zustandes eines Todos
- Löschen eines Todos
*/

const initialTodos: Array<Todo> = [
  { id: 1, title: "Einkaufen", completed: false },
  { id: 2, title: "Steuererklärung", completed: true },
  { id: 3, title: "Aufräumen", completed: false },
];

type AddTodoAction = {
  type: "addTodo";
  payload: string;
};
type ChangeCompletedAction = {
  type: "changeCompleted";
  payload: { id: number; completed: boolean };
};
type DeleteTodoAction = {
  type: "deleteTodo";
  payload: number;
};
type LoadTodosAction = {
  type: "loadTodos";
  payload: Array<Todo>;
};
type TodosAction =
  | AddTodoAction
  | ChangeCompletedAction
  | DeleteTodoAction
  | LoadTodosAction;

function todosReducer(
  todosState: Array<Todo>,
  action: TodosAction
): Array<Todo> {
  switch (action.type) {
    case "addTodo":
      const newId = Math.max(...todosState.map((t) => t.id), 0) + 1;
      return [
        ...todosState,
        { id: newId, title: action.payload, completed: false },
      ];
    case "deleteTodo":
      return todosState.filter((todo) => todo.id !== action.payload);
    case "changeCompleted":
      return todosState.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    case "loadTodos":
      return action.payload;
    default:
      return todosState;
  }
}

function App() {
  const [rating1, setRating1] = useState(3);

  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  function addTodo(title: string): void {
    dispatch({ type: "addTodo", payload: title });
  }

  function changeCompleted(id: number, completed: boolean): void {
    dispatch({
      type: "changeCompleted",
      payload: { id: id, completed: completed },
    });
  }

  function deleteTodo(id: number): void {
    dispatch({ type: "deleteTodo", payload: id });
  }

  async function loadTodosFromAPI() {
    const apiTodos = await fetchTodos();
    dispatch({ type: "loadTodos", payload: apiTodos });
  }
  // useEffect(() => {
  //   loadTodosFromAPI();
  // }, []);

  function saveTodosToLS() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function loadTodosFromLS() {
    const lsTodosString = localStorage.getItem("todos");
    if (lsTodosString) {
      dispatch({ type: "loadTodos", payload: JSON.parse(lsTodosString) });
    }
  }
  useEffect(() => {
    saveTodosToLS();
  }, [todos]);

  return (
    <div>
      <Rating value={rating1} onChange={setRating1} />
      <h1>Todo</h1>
      <NavLink to="/">home</NavLink> <NavLink to="/about">about</NavLink>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                <button onClick={loadTodosFromAPI}>load todos from API</button>
                <button onClick={saveTodosToLS}>
                  save todos to local storage
                </button>
                <button onClick={loadTodosFromLS}>
                  load todos from local storage
                </button>
              </div>
              <ul style={{ maxHeight: 400, overflow: "auto" }}>
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onCompletedChange={(completed) => {
                      changeCompleted(todo.id, completed);
                    }}
                    onDelete={() => deleteTodo(todo.id)}
                  />
                ))}
              </ul>
              <AddTodo onAdd={(newTitle) => addTodo(newTitle)} />
              <AddTodoClass onAdd={(newTitle) => addTodo(newTitle)} />
            </div>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
