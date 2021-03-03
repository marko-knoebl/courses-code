import shorten from "./shorten";

test('shortens "loremipsum" to "lor..." with limit 6', () => {
  expect(shorten("loremipsum", 6)).toEqual("lor...");
});

test('shortens "loremipsum" to "lor..." with limit 9', () => {
  expect(shorten("loremipsum", 9)).toEqual("loremi...");
});

describe("strings that are short enough", () => {
  test('leaves "abc" unchanged with limit 5', () => {
    expect(shorten("abc", 5)).toEqual("abc");
  });
  test('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten("loremipsum", 10)).toEqual("loremipsum");
  });
});
