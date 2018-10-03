import {
  TOGGLE_TODO,
  LOAD_TODOS_REQUEST,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_GRAPHQL_REQUEST,
  LOAD_TODOS_GRAPHQL_SUCCESS
} from '../constants';

// action creators

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const loadTodos = () => dispatch => {
  dispatch(loadTodosRequest());
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      dispatch(
        loadTodosSuccess(
          data.map(todo => ({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
          }))
        )
      );
    });
};

export const loadTodosRequest = () => ({
  type: LOAD_TODOS_REQUEST
});
export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  todos
});

export const loadTodosGraphql = () => dispatch => {
  dispatch(loadTodosGraphqlRequest());

  const requestBody = {
    query: 'query loadTodos {todos {title id completed} }'
  };
  const requestBodyStr = JSON.stringify(requestBody);

  fetch('https://5qn401kkl9.lp.gql.zone/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: requestBodyStr
  })
    .then(response => response.json())
    .then(parsedResponse => {
      return parsedResponse.data.todos;
    })
    .then(todos => dispatch(loadTodosGraphqlSuccess(todos)));
};

export const loadTodosGraphqlRequest = () => ({
  type: LOAD_TODOS_GRAPHQL_REQUEST
});
export const loadTodosGraphqlSuccess = todos => ({
  type: LOAD_TODOS_GRAPHQL_SUCCESS,
  todos
});
