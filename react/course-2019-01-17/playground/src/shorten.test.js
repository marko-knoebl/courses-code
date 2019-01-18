import { shorten} from './shorten';

it("shortens 'loremipsum' to 'lor...' given a max length of 6.",
  () => {
    const expected = "lor...";
    const actual = shorten("loremipsum", 6);
    expect(actual).toEqual(expected);
  }
);
