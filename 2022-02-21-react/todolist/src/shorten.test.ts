import shorten from "./shorten";

it("shortens 'loremipsum' to 'lor...' given length 6", () => {
  expect(shorten("loremipsum", 6)).toEqual("lor...");
});

describe("strings that are short enough", () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten("abc", 5)).toEqual("abc");
  });
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten("loremipsum", 10)).toEqual("loremipsum");
  });
});
