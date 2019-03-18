import shorten from './shorten';

describe('strings that are short enough', () => {
  it("leaves 'abcdef' unchanged", () => {
    const expected = 'abcdef';
    const actual = shorten('abcdef', 6);
    expect(actual).toEqual(expected);
  });
});

describe('strings that are too long', () => {
  it("shortens 'loremipsum' to 'lor...'", () => {
    const expected = 'lor...';
    const actual = shorten('loremipsum', 6);
    expect(actual).toEqual(expected);
  });

  it("shortens '1234567' to '123...'", () => {
    const expected = '123...';
    const actual = shorten('1234567', 6);
    expect(actual).toEqual(expected);
  });
});

describe('invalid inputs', () => {
  it('throws an error if maxlength <= 3', () => {
    const myFn = () => {
      shorten('abcd', 3);
    };

    expect(myFn).toThrow('Input string too short.');
  });
});
