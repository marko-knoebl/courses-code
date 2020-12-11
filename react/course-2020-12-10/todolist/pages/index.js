import { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import Rating from "../components/Rating";
import TodoList from "../components/TodoList";
import Link from "next/link";
import Head from "next/head";
import useTodos from "../hooks/useTodos";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return { props: { todos: todos } };
}

export default function Home(props) {
  const {
    todos,
    isLoading,
    deleteCompleted,
    toggleTodo,
    deleteTodo,
  } = useTodos(props.todos);

  const [prod1Rating, setProd1Rating] = useState(3);

  return (
    <div>
      <Head>
        <title>Todos ({todos.length})</title>
      </Head>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <h1>Todos</h1>
      {isLoading ? <h2>loading...</h2> : null}
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />

      <div>
        <button onClick={deleteCompleted}>delete completed todos</button>
      </div>

      <AddTodo
        onAdd={(title) => {
          // define custom behavior
          const maxId = Math.max(...todos.map((todo) => todo.id), 0);
          const newTodo = {
            id: maxId + 1,
            title: title,
            completed: false,
          };
          setTodos([...todos, newTodo]);
        }}
      />

      <h1>rating</h1>
      <Rating stars={2} />
      <Rating
        stars={prod1Rating}
        onStarsChange={(newRating) => {
          setProd1Rating(newRating);
        }}
      />
    </div>
  );
}
