import { Todo } from "./types";

interface ApiTodo {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}

const URL = "https://jsonplaceholder.typicode.com/todos";

export async function fetchTodos(): Promise<Array<Todo>> {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("error while fetching");
  }
  const data: Array<any> = await res.json();
  const todos = data
    .map((todoFromApi) => {
      return {
        id: todoFromApi.id,
        title: todoFromApi.title,
        completed: todoFromApi.completed,
      };
    })
    .filter((todo) => todo.id < 10);
  return todos;
}
