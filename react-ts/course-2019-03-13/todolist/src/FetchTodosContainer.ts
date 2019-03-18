import FetchTodos from './FetchTodos';
import { RootState, AppAction } from './redux/rootReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import TodoType from './TodoType';

const mapStateToProps = (state: RootState) => ({
  isFetching: state.data.isFetching
});

const fetchTodos = (dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_TODOS_START' });
  fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
    if (response.ok) {
      response.json().then(serverTodos => {
        dispatch({
          type: 'FETCH_TODOS_SUCCESS',
          payload: {
            todos: serverTodos.map(
              (serverTodo: TodoType & { userId: number }) => {
                const { userId, ...todo } = serverTodo;
                return todo;
              }
            )
          }
        });
      });
    } else {
      dispatch({ type: 'FETCH_TODOS_ERROR' });
    }
  });
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AppAction>
) => ({
  onFetchTodosStart: () => {
    dispatch(fetchTodos);
  }
});

const FetchTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchTodos);

export default FetchTodosContainer;
