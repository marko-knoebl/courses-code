import shorten from './shorten';

it("shortens 'loremipsum' to 'lor...'", () => {
  const expectedValue = "lor..."
  const actualValue = shorten("loremipsum", 6)
  expect(actualValue).toEqual(expectedValue);
});
