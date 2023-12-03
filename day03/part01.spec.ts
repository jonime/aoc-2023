import { findParts } from './part01';

const example = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const allNumbers = Array.from(example.matchAll(/\d+/g)).map(([match]) =>
  Number(match),
);

const notExpected = [58, 114];
const expected = allNumbers.filter((number) => !notExpected.includes(number));

describe('findParts', () => {
  describe('when parsing the example', () => {
    it.each(expected)('should contain %d', (value) => {
      expect(findParts(example)).toContain(value);
    });

    it.each(notExpected)('should not contain %d', (value) => {
      expect(findParts(example)).not.toContain(value);
    });
  });

  it('should handle codes in the end of the line', () => {
    expect(
      findParts(
        `
...#...
....123
.......
  `.trim(),
      ),
    ).toEqual([123]);
  });

  it('should handle one character codes', () => {
    expect(
      findParts(
        `
...#...
....1..
.......
  `.trim(),
      ),
    ).toEqual([1]);
  });

  it('should match top-left', () => {
    expect(
      findParts(
        `
#..
.1.
...
  `.trim(),
      ),
    ).toEqual([1]);
  });

  it('should match top-right', () => {
    expect(
      findParts(
        `
..#
.1.
...
  `.trim(),
      ),
    ).toEqual([1]);
  });

  it('should match bottom-left', () => {
    expect(
      findParts(
        `
...
.1.
#..
  `.trim(),
      ),
    ).toEqual([1]);
  });

  it('should match bottom-right', () => {
    expect(
      findParts(
        `
...
.1.
..#
  `.trim(),
      ),
    ).toEqual([1]);
  });

  it('should find code if character is in the middle of the code', () => {
    expect(
      findParts(`
    ......
    ....$.
    ...555
    `),
    ).toEqual([555]);
  });

  it('should not include 787', () => {
    expect(
      findParts(
        `
......*.....
..787.639...
............
    `.trim(),
      ),
    ).not.toContain(787);
  });
});
