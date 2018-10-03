import { connect } from 'react-redux';

import { loadTodosGraphql } from '../../redux/todos/todo-actions';

import ServerInteractions from './ServerInteractions';

const mapDispatchToProps = dispatch => ({
  loadTodosGraphql: () => {
    dispatch(loadTodosGraphql());
  }
});

const ServerInteractionsContainer = connect(
  null,
  mapDispatchToProps
)(ServerInteractions);

export default ServerInteractionsContainer;
