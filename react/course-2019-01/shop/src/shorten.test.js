import shorten from "./shorten";

it('shortens "abcdef" to "ab..." given max length 5', () => {
  // in dieser Funktion wird der Test ausgeführt
  const expected = "ab...";
  const actual = shorten("abcdef", 5);
  expect(actual).toEqual(expected);
});

it('leaves "abc" unchanged given max length 5', () => {
  const expected = "abc";
  const actual = shorten("abc", 5);
  expect(actual).toEqual(expected);
});
