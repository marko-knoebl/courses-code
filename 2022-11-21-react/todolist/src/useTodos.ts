import { useEffect, useReducer, useState } from "react";
import { fetchTodos } from "./todosApi";
import { todosReducer } from "./todosReducer";

export default function useTodos() {
  // const [todos, setTodos] = useState<Array<Todo>>([
  //   { id: 1, title: "foo", completed: false },
  //   { id: 2, title: "bar", completed: true },
  // ]);
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  // "idle" | "loading" | "success" | "error"
  const [loadingState, setLoadingState] = useState("idle");

  useEffect(() => {
    loadFromApi();
  }, []);

  async function loadFromApi() {
    setLoadingState("loading");
    let todosFromApi;
    try {
      todosFromApi = await fetchTodos();
      dispatch({ type: "setTodos", payload: todosFromApi });
      setLoadingState("success");
    } catch {
      setLoadingState("error");
    }
  }

  function addTodo(title: string) {
    dispatch({ type: "addTodo", payload: title });
  }

  function setTodoCompleted(id: number, completed: boolean) {
    dispatch({
      type: "setTodoCompleted",
      payload: { id: id, completed: completed },
    });
  }

  function deleteTodo(id: number) {
    dispatch({ type: "deleteTodo", payload: id });
  }

  return {
    todos: todos,
    addTodo: addTodo,
    setTodoCompleted: setTodoCompleted,
    deleteTodo: deleteTodo,
    loadFromApi: loadFromApi,
    loadingState: loadingState,
  };
}
