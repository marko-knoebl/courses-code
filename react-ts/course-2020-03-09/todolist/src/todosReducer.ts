import Todo from "./Todo";

type Action = {
  type: string;
  payload?: any;
};
type AddTodoAction = Action & {
  type: "addTodo";
  payload: string;
};
type ToggleTodoAction = Action & {
  type: "toggleTodo";
  payload: number;
};
type DeleteAllTodosAction = Action & { type: "deleteAllTodos" };
type ReceiveTodosAction = Action & {
  type: "receiveTodos";
  payload: Array<Todo>;
};
type DeleteTodoAction = Action & { type: "deleteTodo"; payload: number };

type TodoAction =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteAllTodosAction
  | ReceiveTodosAction
  | DeleteTodoAction;

function todosReducer(state: Array<Todo>, action: TodoAction): Array<Todo> {
  switch (action.type) {
    case "receiveTodos":
      return action.payload;
    case "deleteAllTodos":
      return [];
    case "addTodo":
      // generate new unique id
      let newId = 1;
      for (let todo of state) {
        if (todo.id >= newId) {
          newId = todo.id + 1;
        }
      }
      // create new state with added todo item
      const newState = [
        ...state,
        { id: newId, title: action.payload, completed: false }
      ];
      return newState;
    case "toggleTodo":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "deleteTodo":
      const newTodos = [];
      for (let todo of state) {
        if (todo.id !== action.payload) {
          newTodos.push(todo);
        }
      }
      return newTodos;
      // alternative: filter()
      return state.filter(todo => todo.id !== action.payload);
  }
}

export default todosReducer;
