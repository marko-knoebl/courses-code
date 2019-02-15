import { createContext } from 'react';
import TodoInterface from './TodoInterface';

interface TodosContextInterface {
  todos: Array<TodoInterface>;
  onAdd: (newTodoTitle: string) => void;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodosContext = createContext<TodosContextInterface>(
  {} as TodosContextInterface
);

export default TodosContext;
