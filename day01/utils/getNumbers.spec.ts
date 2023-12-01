import { getNumbers } from './getNumbers';

describe('getNumbers', () => {
  it.each`
    input                                     | output
    ${'one'}                                  | ${['1']}
    ${'oneight'}                              | ${['1', '8']}
    ${'12threeeight4'}                        | ${['1', '2', '3', '8', '4']}
    ${'oneightwo'}                            | ${['1', '8', '2']}
    ${'onetwothreefourfivesixseveneightnine'} | ${['1', '2', '3', '4', '5', '6', '7', '8', '9']}
  `('returns $output when $input is given', ({ input, output }) => {
    expect(getNumbers(input)).toEqual(output);
  });
});
