import uiReducer, { UiAction } from './uiReducer';
import todosReducer, { TodosAction } from './todosReducer';

import UiState from './UiState';
import TodosState from './TodosState';
import { combineReducers } from 'redux';

export interface RootState {
  ui: UiState;
  data: TodosState;
}

export type AppAction = TodosAction | UiAction;

const rootReducerDemo = (state: RootState, action: AppAction): RootState => {
  return {
    ui: uiReducer(state.ui, action),
    data: todosReducer(state.data, action)
  };
};

// Kurzform für obiges
const rootReducer = combineReducers({
  ui: uiReducer,
  data: todosReducer
});

export default rootReducer;
