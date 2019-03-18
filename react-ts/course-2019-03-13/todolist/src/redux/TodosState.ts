import TodoType from '../TodoType';

interface TodosState {
  todos: Array<TodoType>;
  isFetching: boolean;
  hasError: boolean;
}

export default TodosState;
