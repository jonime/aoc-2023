import { getFirstAndLastNumber } from './getFirstAndLastNumber';

describe('getFirstAndLastNumber', () => {
  it.each`
    input                                       | first  | last
    ${'one'}                                    | ${'1'} | ${'1'}
    ${'1two'}                                   | ${'1'} | ${'2'}
    ${'oneight'}                                | ${'1'} | ${'8'}
    ${'threefourasdf'}                          | ${'3'} | ${'4'}
    ${'seven888493'}                            | ${'7'} | ${'3'}
    ${'eightfivesssxxmgthreethreeone1sevenhnz'} | ${'8'} | ${'7'}
    ${'two1nine'}                               | ${'2'} | ${'9'}
    ${'eightwothree'}                           | ${'8'} | ${'3'}
    ${'abcone2threexyz'}                        | ${'1'} | ${'3'}
    ${'xtwone3four'}                            | ${'2'} | ${'4'}
    ${'4nineeightseven2'}                       | ${'4'} | ${'2'}
    ${'zoneight234'}                            | ${'1'} | ${'4'}
    ${'7pqrstsixteen'}                          | ${'7'} | ${'6'}
    ${'eighthree'}                              | ${'8'} | ${'3'}
    ${'sevenine'}                               | ${'7'} | ${'9'}
    ${'oneight'}                                | ${'1'} | ${'8'}
    ${'tgppgp9'}                                | ${'9'} | ${'9'}
  `(
    'returns $first and $last when $input is given',
    ({ input, first, last }) => {
      expect(getFirstAndLastNumber(input)).toEqual([first, last]);
    },
  );

  it('should throw exception is numbers are not found', () => {
    expect(() => getFirstAndLastNumber('abba')).toThrow();
  });
});
