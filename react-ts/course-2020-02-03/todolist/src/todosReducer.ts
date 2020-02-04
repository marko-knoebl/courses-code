import { TodoType } from "./TodoType";

type State = Array<TodoType>;

type Action = {
  type: string;
};

type AddTodoAction = Action & {
  type: "addTodo";
  title: string;
};

type ToggleTodoAction = Action & {
  type: "toggleTodo";
  id: number;
};

type ReceiveTodosAction = Action & {
  type: "receiveTodos";
  todos: Array<TodoType>;
};

type TodosAction = AddTodoAction | ToggleTodoAction | ReceiveTodosAction;

const todosReducer = (oldState: State, action: TodosAction): State => {
  switch (action.type) {
    case "addTodo":
      return [
        ...oldState,
        {
          id: oldState.length + 1,
          title: action.title,
          completed: false
        }
      ];
    case "toggleTodo":
      return oldState.map(t =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    case "receiveTodos":
      return action.todos;
    default:
      throw Error("unknown action type");
  }
};

export default todosReducer;
