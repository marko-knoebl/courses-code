import { Todo } from "./Todo";

type Action = {
  type: string;
  payload?: any;
};

type ToggleTodoAction = Action & {
  type: "toggleTodo";
  payload: number;
};

type DeleteTodoAction = Action & {
  type: "deleteTodo";
  payload: number;
};

type AddTodoAction = Action & {
  type: "addTodo";
  payload: string;
};

type SetTodosAction = Action & {
  type: "setTodos";
  payload: Array<Todo>;
};

type TodosAction =
  | ToggleTodoAction
  | DeleteTodoAction
  | AddTodoAction
  | SetTodosAction;

function todosReducer(oldTodos: Array<Todo>, action: TodosAction): Array<Todo> {
  switch (action.type) {
    case "toggleTodo":
      const newTodos = oldTodos.map((t) => {
        if (t.id === action.payload) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      });
      return newTodos;
    case "deleteTodo":
      return oldTodos.filter((todo) => todo.id !== action.payload);
    case "addTodo":
      let newId = 1;
      for (let todo of oldTodos) {
        if (todo.id >= newId) {
          newId = todo.id + 1;
        }
      }
      return [
        ...oldTodos,
        { id: newId, title: action.payload, completed: false },
      ];
    case "setTodos":
      return action.payload;
  }
}

export default todosReducer;
