import shorten from './shorten';

test(
    'shorten "loremipsum" to "lor..."',
    () => {
        const expected = 'lor...';
        const result = shorten('loremipsum', 6);
        expect(result).toEqual(expected);
    }
)