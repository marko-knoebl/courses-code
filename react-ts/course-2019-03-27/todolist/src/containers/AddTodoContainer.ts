import { connect } from 'react-redux';
import RootState from '../redux/RootState';
import { Dispatch } from 'redux';
import RootAction from '../redux/RootAction';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state: RootState) => ({
  newTodoTitle: state.ui.newTodoTitle
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onNewTodoTitleChange: (newTitle: string) => {
    dispatch({ type: 'SET_NEW_TODO_TITLE', payload: { title: newTitle } });
  },
  onAddTodo: (newTitle: string) => {
    dispatch({ type: 'ADD_TODO', payload: { title: newTitle } });
  }
});

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
