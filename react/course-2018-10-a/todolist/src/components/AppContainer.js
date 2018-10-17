import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import App from './App';
import { loadTodos } from '../redux/todos/todo-actions';

const mapStateToProps = state => ({
  isLoading: state.todoList.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadTodos: () => {
    dispatch(loadTodos());
  }
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(AppContainer);
