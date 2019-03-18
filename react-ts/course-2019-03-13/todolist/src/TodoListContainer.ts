import TodoList from './TodoList';
import TodosState from './redux/TodosState';
import { TodosAction } from './redux/todosReducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from './redux/rootReducer';

// erhält den state des redux-stores
// gibt die entsprechenden Properties für TodoList zurück
const mapStateToProps = (state: RootState) => ({
  todos: state.data.todos,
  hasError: state.data.hasError
});

export const mapDispatchToProps = (dispatch: Dispatch<TodosAction>) => ({
  // dispatch ist die dispatch-Funktion des Stores.
  // sie wird uns hier automatisch übergeben
  onCompleted: (id: number) => {
    dispatch({ type: 'TODO_COMPLETED', payload: { id } });
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;