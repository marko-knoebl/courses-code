import { connect } from 'react-redux';

import NewTodo from './NewTodo';
import { newTodoChange } from '../../redux/new-todo/new-todo-actions';
import { addTodo } from '../../redux/actions';

const mapStateToProps = state => ({
  newTodo: state.newTodo
});

const mapDispatchToProps = dispatch => ({
  onNewTodoChange: newTodoTitle => {
    dispatch(newTodoChange(newTodoTitle));
  },
  onSubmitTodo: submittedTodoTitle => {
    dispatch(addTodo(submittedTodoTitle));
  }
});

const NewTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);

export default NewTodoContainer;
