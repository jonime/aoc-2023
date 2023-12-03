import { range } from '../common/array';
import { multiply, sum } from '../common/math';
import { readFile } from '../common/readFile';

const getSurroundingPositions = (row: number, col: number, length: number) =>
  range(row - 1, row + 1).flatMap((row) =>
    range(col - 1, col + length).map((col) => ({
      row,
      col,
    })),
  );

export const findGears = (input: string) => {
  const gears: Array<{
    connection: { row: number; col: number };
    ratios: number[];
  }> = [];

  const rows = input.split(/\s*\n\s*/);

  for (const [row, content] of rows.entries()) {
    for (const { 0: code, index } of content.matchAll(/\d+/g)) {
      const [connection] = getSurroundingPositions(
        row,
        index!,
        code.length,
      ).filter(({ row, col }) => rows[row]?.[col] === '*');

      if (connection) {
        let gear = gears.find(
          (gear) =>
            gear.connection.col === connection.col &&
            gear.connection.row === connection.row,
        );

        if (!gear) {
          gear = { connection, ratios: [] };
          gears.push(gear);
        }

        gear.ratios.push(Number(code));
      }
    }
  }

  return gears
    .filter(({ ratios }) => ratios.length === 2)
    .map(({ ratios }) => ratios.reduce(multiply));
};

const result = findGears(readFile(`${__dirname}/input`)).reduce(sum);

console.log(result);
