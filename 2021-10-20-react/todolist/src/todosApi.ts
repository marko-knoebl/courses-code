import { Todo } from "./Todo";

async function fetchTodos(): Promise<Array<Todo>> {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch todos");
  }
  const apiTodos = await res.json();
  // convert data format (don't include userId)
  const todos = apiTodos.map((todo: any) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  }));
  return todos;
}

export { fetchTodos };
