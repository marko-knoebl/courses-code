import { connect } from 'react-redux';

import TodoList from './TodoList';

import { toggleTodo } from '../../redux/todos/todo-actions';

const mapStateToProps = state => ({
  todos: state.todoList.todos
});

const mapDispatchToProps = dispatch => ({
  // map the onToggle event to a function
  // that handles it
  // "dispatch" is the dispatch function from the store
  onToggle: id => {
    // create an action and call dispatch with it
    dispatch(toggleTodo(id));
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
