import { NEW_TODO_CHANGE } from '../constants';

export const newTodoChange = newTodoTitle => ({
  type: NEW_TODO_CHANGE,
  newTodoTitle
});
