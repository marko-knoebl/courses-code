import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddTodo from "../components/AddTodo";
import Statistics from "../components/Statistics";
import TodoItem from "../components/TodoItem";
import { useTodos } from "../hooks/useTodos";
import styles from "../styles/Home.module.css";
import { Todo } from "../types";

const Home: NextPage = () => {
  const todoData = useTodos();

  return (
    <div className={styles.main}>
      <h1>Todo</h1>
      <div>
        <button onClick={() => todoData.loadFromApi()}>
          load todos from API
        </button>
      </div>
      {todoData.loadingStatus === "loading" ? <div>loading...</div> : null}
      {todoData.loadingStatus === "error" ? (
        <div>Error while loading!</div>
      ) : null}
      <AddTodo onAdd={(title) => todoData.addTodo(title)} />
      <ul>
        {todoData.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => todoData.deleteTodo(todo.id)}
            onToggle={() => todoData.setCompleted(todo.id, !todo.completed)}
          />
        ))}
      </ul>
      <Statistics todos={todoData.todos} />
    </div>
  );
};

export default Home;
