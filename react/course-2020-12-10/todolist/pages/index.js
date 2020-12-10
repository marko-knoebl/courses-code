import Head from "next/head";
import { useState } from "react";
import Rating from "../components/Rating";
import TodoItem from "../components/TodoItem";
import styles from "../styles/Home.module.css";

export default function Home() {

  const {todos, deleteTodo, toggleTodo, deleteCompleted} = useTodos()

  const [todos, setTodos] = useState([
    { id: 1, title: "groceries", completed: true },
    { id: 2, title: "taxes", completed: false },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [prod1Rating, setProd1Rating] = useState(3);

  function deleteCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const listItems = todos.map((todo) => {
    return (
      <TodoItem
        title={todo.title}
        completed={todo.completed}
        key={todo.id}
        onDelete={() => {
          setTodos(todos.filter((t) => todo.id != t.id));
        }}
      />
    );
  });

  return (
    <div>
      <h1>Todos</h1>
      <ul>{listItems}</ul>
      <div>
        <button onClick={deleteCompleted}>delete completed todos</button>
      </div>
      <form
        onSubmit={(event) => {
          // prevent default behavior
          event.preventDefault();
          // define custom behavior
          const maxId = Math.max(...todos.map((todo) => todo.id), 0);
          const newTodo = {
            id: maxId + 1,
            title: newTitle,
            completed: false,
          };
          setTodos([...todos, newTodo]);
          setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />
        <button disabled={newTitle.length === 0}>add</button>
        <div>length: {newTitle.length}</div>
        <h1>rating</h1>
        <Rating stars={2} />
        <Rating
          stars={prod1Rating}
          onStarsChange={(newRating) => {
            setProd1Rating(newRating);
          }}
        />
      </form>
    </div>
  );
}
