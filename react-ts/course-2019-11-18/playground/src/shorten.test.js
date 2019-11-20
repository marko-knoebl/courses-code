import shorten from './shorten';

it("leaves 'loremipsum' unchanged given max length 20", () => {
  const expected = 'loremipsum';
  const actual = shorten('loremipsum', 20);
  expect(actual).toEqual(expected);
});

it("leaves 'loremipsum' unchanged given max length 10", () => {
  expect(shorten('loremipsum', 10)).toEqual('loremipsum');
});

it("shortens 'loremipsum' to 'lor…' given a max length of 6", () => {
  expect(shorten('loremipsum', 6)).toEqual('loremi…');
});

it("shortens 'loremipsum' to 'loremipsu…' given a max length of 9", () => {
  expect(shorten('loremipsum', 9)).toEqual('loremipsu…');
});

it('raises an error if the max length is <= 0', () => {
  const functionThatShouldThrowError = () => {
    shorten('loremipsum', 0);
  };
  expect(functionThatShouldThrowError).toThrow();
});
