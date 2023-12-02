import { readFile } from '../../common/readFile';

export const parseGames = (input: string) =>
  input
    .trim()
    .split(/\s*;\s/g)
    .map((game) =>
      game.split(/\s*,\s*/).map((pick) => {
        const [, count, color] = pick.match(/^(\d+) (\w+)$/)!;
        return {
          count: Number(count),
          color,
        };
      }),
    );

export const readGames = (file: string) =>
  readFile(file)
    .split(/\s*\n\s*/)
    .map((row) => {
      const [, id, games] = row.match(/^Game (\d+):(.*)$/)!;
      return {
        id: Number(id),
        games: parseGames(games),
      };
    });
