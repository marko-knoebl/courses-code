import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppAction, RootState } from './redux/rootReducer';

const mapStateToProps = (state: RootState) => ({
  newTodoTitle: state.ui.newTodoTitle
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
  onAddTodo: (title: string) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        title
      }
    });
  },
  onNewTodoTitleChange: (title: string) => {
    dispatch({
      type: 'NEW_TODO_TITLE_CHANGE',
      payload: {
        title
      }
    });
  }
});

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
