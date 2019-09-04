import shorten from "./shorten";

it("shortens 'loremipsum' to 'lor...' given a max length of 6", () => {
  const expected = "lor...";
  const actual = shorten("loremipsum", 6);
  expect(actual).toBe(expected);
});

describe("string that are short enough", () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten("abc", 5)).toEqual("abc");
  });
  it("leaves 'loremipsum' unchanged given a max length of 10", () => {
    const expected = "loremipsum";
    const actual = shorten("loremipsum", 10);
    expect(actual).toBe(expected);
  });
});
