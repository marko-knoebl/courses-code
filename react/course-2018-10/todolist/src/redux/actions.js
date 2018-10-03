import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS } from './constants';

export const addTodo = title => dispatch => {
  dispatch(addTodoRequest());

  const requestBody = {
    query: `mutation addTodo($title: String!) {
      createTodo(title: $title) {
        id
        title
        completed
      }
    }`,
    variables: JSON.stringify({ title })
  };
  const requestBodyStr = JSON.stringify(requestBody);

  fetch('https://5qn401kkl9.lp.gql.zone/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: requestBodyStr
  })
    .then(response => response.json())
    .then(parsedResponse => {
      console.log(parsedResponse);
      return parsedResponse.data.createTodo;
    })
    .then(todo => {
      dispatch(addTodoSuccess(todo));
    });
};

export const addTodoRequest = () => ({
  type: ADD_TODO_REQUEST
});

export const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  todo
});
