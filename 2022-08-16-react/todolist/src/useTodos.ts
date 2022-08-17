import { useCallback, useState } from "react";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  // const removeTodo = useMemo(() => {
  //   return (id: number) => {
  //     setTodos((todos) => todos.filter((todo) => todo.id !== id));
  //   };
  // }, []);

  const removeTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const setTodoCompleted = useCallback((id: number, completed: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      })
    );
  }, []);

  async function loadTodos() {
    setApiStatus("loading");
    try {
      const todos = await fetchTodos();
      setTodos(todos);
      setApiStatus("success");
    } catch {
      setApiStatus("error");
    }
  }

  // idle / loading / success / error
  const [apiStatus, setApiStatus] = useState("idle");

  function addTodo(title: string) {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }

  // useEffect(() => {
  //   loadTodos();
  // }, []);

  return {
    todos: todos,
    deleteTodo: removeTodo,
    addTodo: addTodo,
    setTodoCompleted: setTodoCompleted,
    apiStatus: apiStatus,
    loadTodos: loadTodos,
  };
}

export { useTodos };
