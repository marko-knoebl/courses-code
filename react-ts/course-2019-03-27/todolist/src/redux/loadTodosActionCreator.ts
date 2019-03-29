import { Dispatch } from 'redux';
import RootAction from './RootAction';

type APITodo = {
  title: string;
  id: number;
  completed: boolean;
  userId: number;
};

const loadTodosActionCreator = () => {
  // return the action
  return (dispatch: Dispatch<RootAction>) => {
    dispatch({ type: 'LOAD_TODOS_START' });
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          // dispatch({ type: 'LOAD_TODOS_FAILURE' });
        } else {
          response.json().then((todoData: Array<APITodo>) => {
            dispatch({
              type: 'LOAD_TODOS_SUCCESS',
              payload: {
                todos: todoData.map(todo => ({
                  id: todo.id,
                  title: todo.title,
                  completed: todo.completed
                }))
              }
            });
          });
        }
      })
      .catch(() => {
        console.log('could not parse json');
      });
  };
};

export default loadTodosActionCreator;
