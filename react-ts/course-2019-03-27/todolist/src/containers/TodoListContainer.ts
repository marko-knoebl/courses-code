import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import RootState from '../redux/RootState';
import { Dispatch } from 'redux';
import RootAction from '../redux/RootAction';
import { ThunkDispatch } from 'redux-thunk';
import loadTodosActionCreator from '../redux/loadTodosActionCreator';

const mapStateToProps = (state: RootState) => ({
  todos: state.todoData.todos,
  isLoading: state.todoData.isLoading
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, RootAction>
) => ({
  onToggle: (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id: id } });
  },
  onLoadTodos: () => {
    dispatch(loadTodosActionCreator());
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
