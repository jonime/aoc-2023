import { countScore, getNumbers, getScore, parseInput } from './part1';

const example = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`.trim();

describe('getNumbers', () => {
  it('should parse numbers correctly', () => {
    expect(getNumbers('1 2 3')).toEqual([1, 2, 3]);
  });

  it('should parse parse empty string as empty array', () => {
    expect(getNumbers('')).toEqual([]);
  });
});

describe('parseInput', () => {
  it('should parse one game correctly', () => {
    expect(parseInput('Card 1: 1 2 3 | 1 2 3')).toEqual([
      {
        winningNumbers: [1, 2, 3],
        numbers: [1, 2, 3],
      },
    ]);
  });

  it('should parse two games correctly', () => {
    expect(
      parseInput(
        `
Card 1: 1 2 3 | 1 2 3
Card 2: 12 34 56 | 99 88 77
`.trim(),
      ),
    ).toEqual([
      {
        winningNumbers: [1, 2, 3],
        numbers: [1, 2, 3],
      },
      {
        winningNumbers: [12, 34, 56],
        numbers: [99, 88, 77],
      },
    ]);
  });

  it('should parse card with padding', () => {
    expect(parseInput('Card            50: 1 2 3 | 1 2 3')).toEqual([
      {
        winningNumbers: [1, 2, 3],
        numbers: [1, 2, 3],
      },
    ]);
  });
});

describe('getScore', () => {
  it('should get 1 point for 1 correct number', () => {
    expect(getScore({ winningNumbers: [1, 2, 3], numbers: [1, 4, 5] })).toEqual(
      1,
    );
  });

  it('should get 2 points for 2 correct numbers', () => {
    expect(getScore({ winningNumbers: [1, 2, 3], numbers: [1, 2, 5] })).toEqual(
      2,
    );
  });

  it('should get 4 points for 3 correct numbers', () => {
    expect(getScore({ winningNumbers: [1, 2, 3], numbers: [1, 2, 3] })).toEqual(
      4,
    );
  });

  it('should get 8 points for 4 correct numbers', () => {
    expect(
      getScore({ winningNumbers: [1, 2, 3, 4], numbers: [1, 2, 3, 4] }),
    ).toEqual(8);
  });
});

describe('countScore', () => {
  it('should count Card 1 correctly', () => {
    expect(
      countScore('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'),
    ).toEqual(8);
  });

  it('should count Card 2 correctly', () => {
    expect(
      countScore('Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19'),
    ).toEqual(2);
  });

  it('should count Card 3 correctly', () => {
    expect(
      countScore('Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1'),
    ).toEqual(2);
  });

  it('should count Card 4 correctly', () => {
    expect(
      countScore('Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83'),
    ).toEqual(1);
  });

  it('should count Card 5 correctly', () => {
    expect(
      countScore('Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36'),
    ).toEqual(0);
  });

  it('should count Card 6 correctly', () => {
    expect(
      countScore('Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'),
    ).toEqual(0);
  });

  it('should count example correctly', () => {
    expect(countScore(example)).toEqual(13);
  });
});
