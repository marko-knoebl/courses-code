import TodosAction from './todosActions';
import UIAction from './uiActions';

type RootAction = TodosAction | UIAction;

export default RootAction;
