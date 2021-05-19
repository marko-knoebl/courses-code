import { Todo } from "./types";

type ApiTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodosStrict(): Promise<Array<Todo>> {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  const todos = (await res.json()) as Array<ApiTodo>;
  return todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  }));
}

async function fetchTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  const todos = (await res.json()) as Array<ApiTodo>;
  return todos;
}

export { fetchTodos, fetchTodosStrict };
