import { UIState } from './uiReducer';
import { TodosState } from './todosReducer';

type RootState = {
  ui: UIState;
  todoData: TodosState;
};

export default RootState;
