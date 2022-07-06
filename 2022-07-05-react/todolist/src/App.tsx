import { useEffect, useReducer, useState } from "react";
import { Button } from "@material-ui/core";
import "./index.css";
import "./App.css";

import { Todo } from "./types";
import Rating from "./Rating";
import Statistics from "./Statistics";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./todosApi";
import { todosReducer } from "./todosReducer";

export default function App() {
  const [rating1, setRating1] = useState(3);

  const [todos, todosDispatch] = useReducer(todosReducer, []);

  const [editTitle, setEditTitle] = useState("");
  const [editId, setEditId] = useState<null | number>(null);

  // SORTING BY STATUS, OPTION 1
  // array of todos with all incomplete todos first,
  // then all completed todos

  const todosByStatus = [
    ...todos.filter((todo) => !todo.completed),
    ...todos.filter((todo) => todo.completed),
  ];

  // SORTING BY STATUS, OPTION 2
  // array of todos, sorted by their status

  // make a copy of the todos array
  const todosSortedByStatus = todos.slice();
  // sort the copy (.sort operates in-place)
  todosSortedByStatus.sort(
    (todoA, todoB) => Number(todoA.completed) - Number(todoB.completed)
  );

  function startEditingTitle(id: number) {
    const editTodo = todos.find((todo) => todo.id === id);
    if (editTodo !== undefined) {
      setEditTitle(editTodo.title);
      setEditId(id);
    }
  }

  function finishEditingTitle() {
    // Möglichkeiten:
    // 1
    //   1a altes todo entfernen
    //   1b todo neu mit geändertem titel hinzufügen

    // 2 map - die meisten beibehalten, eines ändern

    todosDispatch({ type: "setTitle", payload: { id: editId, title: editTitle } });
    setEditId(null);
    setEditTitle("");
  }

  function addTodo(title: string): void {
    todosDispatch({ type: "addTodo", payload: title });
  }

  function removeTodo(id: number): void {
    todosDispatch({ type: "removeTodo", payload: id });
  }

  function setTodoCompleted(id: number, newCompleted: boolean): void {
    todosDispatch({
      type: "setTodoCompleted",
      payload: { id: id, completed: newCompleted },
    });
  }

  // async function loadTodosFromApi() {
  //   const todosFromApi = await fetchTodos();
  //   setTodos(todosFromApi);
  // }

  // useEffect(() => {
  //   loadTodosFromApi();
  // }, []);

  return (
    <div className="App">
      <h1>Todo</h1>

      {/* <div>
        <Button onClick={() => loadTodosFromApi()}>load data from API</Button>
      </div> */}

      <AddTodo onAddTodo={(title) => addTodo(title)} />
      {/* kurz:
        <AddTodo onAddTodo={addTodo} />
      */}

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChangeCompleted={setTodoCompleted}
            onDelete={removeTodo}
            onEditTitle={startEditingTitle}
          />
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          finishEditingTitle();
        }}
      >
        <h4>todo editor</h4>

        {editId !== null ? <p>editing todo {editId}</p> : null}

        <input
          value={editTitle}
          onChange={(event) => setEditTitle(event.target.value)}
        />
        <Button variant="contained" type="submit">
          apply
        </Button>
      </form>
      <Statistics todos={todos} />
    </div>
  );
}
