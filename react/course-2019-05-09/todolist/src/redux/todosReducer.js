const initialState = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "cooking", completed: true },
  { id: 3, title: "gardening", completed: false }
];

// more actions:

// DELETE_TODO (delete one todo by its ID)
// DELETE_ALL (delete all todos)
// DELETE_COMPLETED (delete all completed todos)

const todosReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case "DELETE_ALL":
      return [];
    case "DELETE_COMPLETED":
      return oldState.filter(todo => !todo.completed);
    case "DELETE_TODO":
      return oldState.filter(todo => todo.id !== action.payload.id);
    case "TOGGLE_TODO":
      return oldState.map(todo => {
        if (action.payload.id === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      let newId = 1;
      for (let oldTodo of oldState) {
        if (oldTodo.id >= newId) {
          newId = oldTodo.id + 1;
        }
      }

      // functional approach
      // let newId = oldState.reduce(
      //   (accumulator, todo) => Math.max(accumulator, todo.id + 1),
      //   1
      // );

      return [
        ...oldState,
        {
          id: newId,
          title: action.payload.title,
          completed: false
        }
      ];
    default:
      return oldState;
  }
};

export default todosReducer;
