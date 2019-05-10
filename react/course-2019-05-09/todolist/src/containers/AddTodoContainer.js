import { connect } from "react-redux";

import AddTodo from "../components/AddTodo";

const mapStateToProps = state => ({
  newTodoTitle: state.newTodoTitle
});

const mapDispatchToProps = dispatch => ({
  onNewTodoTitleChange: title => {
    dispatch({ type: "SET_NEW_TODO_TITLE", payload: { newTitle: title } });
  },
  onAddTodo: title => {
    dispatch({ type: "ADD_TODO", payload: { title: title } });
  }
});

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
