// import assert from "assert/strict";
import shorten from "./shorten";

// test("shorten", () => {
//   assert.equal(shorten("loremipsum", 4), "l...");
//   assert.equal(shorten("loremipsum", 9), "loremi...");
//   assert.equal(shorten("loremipsum", 10), "loremipsum");
//   assert.equal(shorten("loremipsum", 11), "loremipsum");
// });

describe("strings that are short enough", () => {
  test('leaves "abc" unchanged with limit 3', () => {
    expect(shorten("abc", 3)).toEqual("abc");
  });
  test('leaves "a" unchanged with limit 1', () => {
    expect(shorten("a", 3)).toEqual("a");
  });
});

describe("strings that will be changed", () => {
  test('shortens "loremipsum" to "lor..."', () => {
    expect(shorten("loremipsum", 6)).toEqual("lor...");
  });
});
