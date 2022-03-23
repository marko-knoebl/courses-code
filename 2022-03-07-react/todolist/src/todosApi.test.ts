import { fetchTodos } from "./todosApi";

it("fetches an array with 200 items", async () => {
  const todos = await fetchTodos();
  expect(todos).toHaveLength(200);
  expect(todos[0]).toHaveProperty("completed");
});
