import shorten from "./shorten";

describe("strings that are shortened", () => {
  it('shortens "loremipsum" to "lor..." with limit 6', () => {
    const expected = "lor...";
    const actual = shorten("loremipsum", 6);
    expect(actual).toEqual(expected);
  });
  it('shortens "loremipsum" to "loremi..." with limit 9', () => {
    const expected = "loremi...";
    const actual = shorten("loremipsum", 9);
    expect(actual).toEqual(expected);
  });
});

describe("strings that are unchanged", () => {
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten("loremipsum", 10)).toEqual("loremipsum");
  });
});
