import { sum } from '../common/math';
import { readFile } from '../common/readFile';
import { throwError } from '../common/throw';

export const getNumbers = (input: string) =>
  Array.from(input.matchAll(/\d+/g)).map(Number);

export const parseInput = (input: string) =>
  input
    .split(/\s*\n\s*/g)
    .map(
      (line) =>
        line.match(/^.*: (.+) \| (.+)$/) ?? throwError('Cannot parse: ' + line),
    )
    .map(([, winningNumbers, numbers]) => ({
      winningNumbers: getNumbers(winningNumbers),
      numbers: getNumbers(numbers),
    }));

export const getScore = ({
  winningNumbers,
  numbers,
}: {
  winningNumbers: number[];
  numbers: number[];
}) =>
  winningNumbers
    .filter((n) => numbers.includes(n))
    .reduce((acc) => (acc ? acc * 2 : 1), 0);

export const countScore = (input: string) =>
  parseInput(input).map(getScore).reduce(sum);

const result = countScore(readFile(`${__dirname}/input`));

result;
