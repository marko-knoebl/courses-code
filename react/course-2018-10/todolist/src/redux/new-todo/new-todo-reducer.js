import { NEW_TODO_CHANGE, ADD_TODO_SUCCESS } from '../constants';

const newTodoReducer = (state = '', action) => {
  switch (action.type) {
    case NEW_TODO_CHANGE:
      return action.newTodoTitle;
    case ADD_TODO_SUCCESS:
      return '';
    default:
      return state;
  }
};

export default newTodoReducer;
