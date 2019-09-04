import { ThunkDispatch } from "redux-thunk";
import { Action } from "./Action";
import TodoType from "../TodoType";

type ApiTodoType = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

const fetchTodosAction = (
  dispatch: ThunkDispatch<Array<TodoType>, void, Action>
) => {
  // Todos laden von
  // http://jsonplaceholder.typicode.com/todos

  fetch("http://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(apiTodos => {
      const todos = apiTodos.map((apiTodo: ApiTodoType) => ({
        id: apiTodo.id,
        title: apiTodo.title,
        completed: apiTodo.completed
      }));
      dispatch({ type: "RECEIVE_TODOS", todos });
    });
};

export default fetchTodosAction;
