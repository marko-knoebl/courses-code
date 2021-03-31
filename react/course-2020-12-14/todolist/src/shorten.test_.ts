import shorten from "./shorten";

it("shortens 'loremipsum' to 'lor...' given max length 6", () => {
  const expected = "lor...";
  const actual = shorten("loremipsum", 6);
  expect(actual).toEqual(expected);
});

it("shortens 'loremipsum' to 'l...' given max length 4", () => {
  expect(shorten("loremipsum", 4)).toEqual("l...");
});

describe("strings that are short enough", () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten("abc", 5)).toEqual("abc");
  });
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten("loremipsum", 10)).toEqual("loremipsum");
  });
});
