import shorten from "./shorten";

describe("strings that are too long", () => {
  beforeEach(() => {
    console.log("preparing test");
  });

  it("shortens 'loremipsum' to 'lor...' given max length 6", () => {
    const expected = "lor...";
    const actual = shorten("loremipsum", 6);
    expect(actual).toEqual(expected);
  });

  it("shortens 'loremipsum' to 'loremi...' given max length 9", () => {
    const expected = "loremi...";
    const actual = shorten("loremipsum", 9);
    expect(actual).toEqual(expected);
  });
});
