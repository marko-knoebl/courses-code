// import shorten from "shorten";

const shorten = require("./shorten");

it("shortens 'loremipsum' to 'lor...' given length 6", () => {
  const input = "loremipsum";
  const expected = "lor...";
  const actual = shorten(input, 6);

  expect(actual).toEqual(expected);
});

it("leaves 'loremipsum' unchanged given length 10", () => {
  expect(shorten("loremipsum", 10)).toEqual("loremipsum");
});
