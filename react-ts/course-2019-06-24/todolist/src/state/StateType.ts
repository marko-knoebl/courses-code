import { TodoType } from "../TodoType";

export type StateType = {
  todos: Array<TodoType>;
  ui: {
    newTodoTitle: string;
  };
};
