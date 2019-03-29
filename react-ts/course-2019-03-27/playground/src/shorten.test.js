import shorten from './shorten';

describe('strings that are short enough', () => {
  it('leaves "abcd" unchanged given a length of 10', () => {
    const expected = 'abcd';
    const actual = shorten('abcd', 10);
    expect(actual).toEqual(expected);
  });

  it('leaves "abcdef" unchanged given a length of 10', () => {
    const expected = 'abcdef';
    const actual = shorten('abcdef', 10);
    expect(actual).toEqual(expected);
  });
});

it('shortens "loremipsum" to "lor..." given max length 6', () => {
  expect(shorten('loremipsum', 6)).toEqual('lor...');
});

it('throws if maxlength is <= 3', () => {
  expect(() => {
    shorten('abcd', 3);
  }).toThrow('maxlength must be >= 4');
});
