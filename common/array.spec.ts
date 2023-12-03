import { isUnique, range } from './array';

describe('range', () => {
  it.each`
    from  | to    | output
    ${1}  | ${2}  | ${[1, 2]}
    ${5}  | ${5}  | ${[5]}
    ${11} | ${14} | ${[11, 12, 13, 14]}
  `('should generate range from $from to $to', ({ from, to, output }) => {
    expect(range(from, to)).toEqual(output);
  });
});

describe('isUnique', () => {
  it('should filter duplicate items away', () => {
    expect([123, 123].filter(isUnique)).toEqual([123]);
  });
});
