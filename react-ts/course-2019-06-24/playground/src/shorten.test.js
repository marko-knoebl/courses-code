import shorten from "./shorten";

describe("strings that are short enough", () => {
  it("leaves 'abc' unchanged given a maxlength of 10", () => {
    const expected = "abc";
    const actual = shorten("abc", 10);
    expect(actual).toEqual(expected);
  });

  it("leaves 'abc' unchanged given a maxlength of 3", () => {
    const expected = "abc";
    const actual = shorten("abc", 3);
    expect(actual).toEqual(expected);
  });
});

describe("strings that are shortened", () => {
  it("shortens 'loremipsum' to 'lor...' given maxlen 6", () => {
    const expected = "lor...";
    const actual = shorten("loremipsum", 6);
    expect(actual).toEqual(expected);
  });

  it("shortens 'abcde' to 'a...' given maxlen 4", () => {
    expect(shorten("abcde", 4)).toEqual("a...");
  })
});

it("throws an error if the length is negative", () => {
  const functionThatShouldThrowError = () => {
    shorten("abc", -1);
  }

  expect(functionThatShouldThrowError).toThrow();
})