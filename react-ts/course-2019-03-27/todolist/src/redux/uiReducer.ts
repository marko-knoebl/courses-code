import UIAction from './uiActions';

export type UIState = {
  newTodoTitle: string;
};

const initialState: UIState = {
  newTodoTitle: ''
};

const uiReducer = (
  oldState: UIState = initialState,
  action: UIAction
): UIState => {
  switch (action.type) {
    case 'SET_NEW_TODO_TITLE':
      return {
        ...oldState,
        newTodoTitle: action.payload.title
      };
    default:
      return oldState;
  }
};

export default uiReducer;
