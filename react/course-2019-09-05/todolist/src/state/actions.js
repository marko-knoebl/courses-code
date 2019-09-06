// action creators

function addTodo(title) {
  return { type: "ADD_TODO", title };
}

// action creator
export function fetchTodos() {
  return dispatch => {
    dispatch({ type: "FETCH_TODOS_STARTED" });

    const URL = "http://jsonplaceholder.typicode.com/todos";

    fetch(URL)
      .then(response => response.json())
      .then(todos => {
        dispatch({ type: "FETCH_TODOS_SUCCESS", todos: todos });
      });
  };
}
