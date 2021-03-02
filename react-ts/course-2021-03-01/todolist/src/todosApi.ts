type APITodo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

async function fetchTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  const todos: Array<APITodo> = await res.json();
  return todos;
}

export { fetchTodos };
