import todosReducer from "./todosReducer";

it("initializes the state correctly (with 3 todo items)", () => {
  const initialState = todosReducer(undefined, {});
  const firstTodo = initialState[0];
  const expectedTodo = { id: 1, title: "groceries", completed: false };

  expect(firstTodo).toEqual(expectedTodo);
});

describe("add todo", () => {
  it("adds a todo to an empty collection", () => {
    const expectedTodos = [{ id: 1, title: "abcd", completed: false }];

    const initialTodos = [];
    const action = { type: "ADD_TODO", payload: { title: "abcd" } };

    const actualTodos = todosReducer(initialTodos, action);

    expect(actualTodos).toEqual(expectedTodos);
  });

  it("adds a todo to a collection with 3 items", () => {
    const initialTodos = [
      { id: 1, title: "abcd", completed: false },
      { id: 23, title: "abcd", completed: false },
      { id: 5, title: "abcd", completed: false }
    ];

    const expectedTodos = [
      { id: 1, title: "abcd", completed: false },
      { id: 23, title: "abcd", completed: false },
      { id: 5, title: "abcd", completed: false },
      { id: 24, title: "abcd", completed: false }
    ];
    const action = { type: "ADD_TODO", payload: { title: "abcd" } };
    const actualTodos = todosReducer(initialTodos, action);
    expect(actualTodos).toEqual(expectedTodos);
  });
});
