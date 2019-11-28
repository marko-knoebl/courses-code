import todosReducer from "./todosReducer";

const state1 = [{ id: 1, title: "groceries", completed: false }];
const state2 = [
  { id: 1, title: "groceries", completed: false },
  { id: 2, title: "gardening", completed: false }
];
const state3 = [{ id: 2, title: "gardening", completed: false }];
const state4 = [
  { id: 2, title: "gardening", completed: false },
  { id: 3, title: "learn redux", completed: false }
];

it("adds a todo to an existing array of todos", () => {
  const expected = state2;
  const actual = todosReducer(state1, {
    type: "ADD_TODO",
    title: "gardening"
  });
  expect(actual).toEqual(expected);
});

it("removes a todo from an array of todos", () => {
  const expected = state3;
  const actual = todosReducer(state2, {
    type: "DELETE_TODO",
    id: 1
  });
  expect(actual).toEqual(expected);
});

it("adds a todo to an array with non-consecutive ids", () => {
  const actual = todosReducer(state3, {
    type: "ADD_TODO",
    title: "learn redux"
  });
  expect(actual).toEqual(state4);
});

it("toggles the state of a todo", () => {
  const actual = todosReducer(state1, {
    type: "TOGGLE_TODO",
    id: 1
  });
  const expected = [{ id: 1, title: "groceries", completed: true }];
  expect(actual).toEqual(expected);
});

it("throws an error for action type 'FOO'", () => {
  function throwingFunction() {
    todosReducer(state1, { type: "FOO" });
  }
  expect(throwingFunction).toThrow("unknown action type");
});
