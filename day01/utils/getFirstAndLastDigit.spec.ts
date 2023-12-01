import { getFirstAndLastDigit } from './getFirstAndLastDigit';

describe('getFirstAndLastDigit', () => {
  it.each`
    input            | first  | last
    ${'a1b2'}        | ${'1'} | ${'2'}
    ${'a1b'}         | ${'1'} | ${'1'}
    ${'1'}           | ${'1'} | ${'1'}
    ${'123456789'}   | ${'1'} | ${'9'}
    ${'abba121abba'} | ${'1'} | ${'1'}
    ${'abba123abba'} | ${'1'} | ${'3'}
  `(
    'returns $first and $last when $input is given',
    ({ input, first, last }) => {
      expect(getFirstAndLastDigit(input)).toEqual([first, last]);
    },
  );

  it('should throw exception if digit is not found', () => {
    expect(() => getFirstAndLastDigit('abba')).toThrow();
  });
});
