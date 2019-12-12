const loadTodos = dispatch => {
  // thunk action
  dispatch({ type: "LOAD_TODOS_REQUEST" });
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todoData => {
      dispatch({ type: "LOAD_TODOS_SUCCESS", todos: todoData });
    });
};

export { loadTodos };
