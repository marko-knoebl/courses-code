import { Todo } from "./types";

// todosApi.ts
async function fetchTodos(): Promise<Array<Todo>> {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  const apiTodos = await res.json();
  const todos = apiTodos
    // filter by user
    .filter((todo: any) => todo.userId === 1)
    // convert data format (don't include userId)
    .map((todo: any) => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }));
  return todos;
}

export { fetchTodos };
