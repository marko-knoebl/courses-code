import shorten from "./shorten";

it('shortens "loremipsum" to "lor..." with limit 6', () => {
  const expected = "lor...";
  const actual = shorten("loremipsum", 6);

  expect(actual).toEqual(expected);
});

it('leaves "abc" unchanged with limit 5', () => {
  expect(shorten("abc", 5)).toEqual("abc");
});

it('shortens "abcd" to "..." with limit 3', () => {
  expect(shorten("abcd", 3)).toEqual("...");
});
