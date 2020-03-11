import shorten from "./shorten";

it("shortens 'loremipsum' to 'lor...' given length 6", () => {
  const expected = "lor...";
  const actual = shorten("loremipsum", 6);
  expect(actual).toEqual(expected);
});

it("leaves 'loremipsum' unchanged given length 10", () => {
  const expected = "loremipsum";
  const actual = shorten("loremipsum", 10);
  expect(actual).toEqual(expected);
});
