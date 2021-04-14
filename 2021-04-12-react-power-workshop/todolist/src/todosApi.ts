async function fetchTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  const todos = await res.json();
  return todos;
}

export { fetchTodos };
