import { shorten } from './shorten';

test('Shorten "loremipsum" to "lor..."', () => {
  const expectedResult = 'lor...';
  const actualResult = shorten('loremipsum', 6);
  expect(actualResult).toEqual(expectedResult);
});
