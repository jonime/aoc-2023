import { sum } from '../common/math';
import { readGames } from './utils/readGames';

const cubeCounts: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

const result = readGames(`${__dirname}/input`)
  .filter(({ games }) =>
    games.every((game) =>
      game.every(({ color, count }) => count <= cubeCounts[color]),
    ),
  )
  .map(({ id }) => id)
  .reduce(sum);

console.log(result);
