import { connect } from "react-redux";

import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onToggle: id => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
