import { Action } from 'redux';
import UiState from './UiState';
import { AppAction } from './rootReducer';

interface NewTodoTitleChangeAction extends Action {
  type: 'NEW_TODO_TITLE_CHANGE';
  payload: {
    title: string;
  };
}

export type UiAction = NewTodoTitleChangeAction;

const initialState: UiState = { newTodoTitle: '' };

const uiReducer = (
  state: UiState = initialState,
  action: AppAction
): UiState => {
  switch (action.type) {
    case 'NEW_TODO_TITLE_CHANGE':
      return { ...state, newTodoTitle: action.payload.title };
    case 'ADD_TODO':
      return { ...state, newTodoTitle: '' };
    default:
      return state;
  }
};

export default uiReducer;
