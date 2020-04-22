import shorten from "./shorten";

it("shortens 'loremipsum' to 'lor...' given max length 6", () => {
  const expected = "lor...";
  const actual = shorten("loremispum", 6);
  expect(actual).toEqual(expected);
});

it("shortens 'loremipsum' to '..' given max length 2", () => {
  const expected = "..";
  const actual = shorten("loremipsum", 2);
  expect(actual).toEqual(expected);
});

it("leaves 'lo' unchanged", () => {
  expect(shorten("lo", 6)).toEqual("lo");
});
