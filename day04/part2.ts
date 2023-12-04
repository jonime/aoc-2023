import { readFile } from '../common/readFile';
import { throwError } from '../common/throw';
import { getNumbers } from './part1';

const parseCards = (input: string) =>
  input
    .split(/\s*\n\s*/g)
    .map(
      (line) =>
        line.match(/^.*: (.+) \| (.+)$/) ?? throwError('Cannot parse: ' + line),
    )
    .map(([, rawWinningNumbers, rawNumbers]) => {
      const numbers = getNumbers(rawNumbers);
      return getNumbers(rawWinningNumbers).filter((n) => numbers.includes(n))
        .length;
    });

const cards = parseCards(readFile(`${__dirname}/input`));

const countCard = (index: number): number => {
  const matches = cards[index];

  let sum = 1;

  for (let i = index + 1; i < index + 1 + matches; i++) {
    sum += countCard(i);
  }

  return sum;
};

const result = cards.reduce((acc, cards, index) => acc + countCard(index), 0);
result;
