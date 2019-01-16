import counter from "./counterReducer";

it("changes { count: 0 } to { count: 1 } when incremented", () => {
  const expected = { count: 1 };
  const action = { type: "INCREMENT" };
  const initialState = { count: 0 };
  const actual = counter(initialState, action);
  expect(actual).toEqual(expected);
});

it("changes { count: 1 } to { count: 2 } when incremented", () => {
    const expected = { count: 2 };
    const action = { type: "INCREMENT" };
    const initialState = { count: 1 };
    const actual = counter(initialState, action);
    expect(actual).toEqual(expected);
  });
  