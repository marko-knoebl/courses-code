import { Todo } from "./Todo";

import { createContext } from "react";

type TodosContextType = {
  todos: Array<Todo>;
};

const TodosContext = createContext({} as TodosContextType);

export default TodosContext;
