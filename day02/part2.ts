import { multiply, sum } from '../common/math';
import { readGames } from './utils/readGames';

const result = readGames(`${__dirname}/input`)
  .map(({ games }) => {
    const minCubes: Record<string, number> = {};

    games.forEach((pick) =>
      pick.forEach(
        ({ color, count }) =>
          (minCubes[color] = Math.max(minCubes[color] ?? 0, count)),
      ),
    );

    return Object.values(minCubes).reduce(multiply);
  })
  .reduce(sum);

console.log(result);
