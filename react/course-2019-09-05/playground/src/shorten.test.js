import shorten from "./shorten";

describe("strings that are short enough", () => {
  it("leaves 'loremipsum' unchanged given a max length of 20", () => {
    const expected = "loremipsum";
    const actual = shorten("loremipsum", 20);
    expect(actual).toEqual(expected);
  });

  it("leaves 'loremipsum' unchanged given a max length of 10", () => {
    const expected = "loremipsum";
    const actual = shorten("loremipsum", 10);
    expect(actual).toEqual(expected);
    expect(typeof actual).toEqual("string")
  });
});

it("changes 'loremipsum' to 'lor...' given a max length of 6", () => {
  expect(shorten("loremipsum", 6)).toEqual("lor...");
});
