import { Todo } from "./types";

async function fetchTodos(): Promise<Array<Todo>> {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("could not fetch data from network");
  }
  const apiTodos: Array<any> = await res.json();
  // convert data format (don't include userId)
  const todos = apiTodos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  }));
  return todos;
}

export { fetchTodos };
