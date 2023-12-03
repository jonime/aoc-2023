import { range } from '../common/array';
import { multiply, sum } from '../common/math';
import { readFile } from '../common/readFile';

export const findGears = (input: string) => {
  const gears: Array<{
    connection: { row: number; col: number };
    ratios: number[];
  }> = [];

  input.split(/\s*\n\s*/).flatMap((content, row, rows) => {
    const rowsToScan = range(row - 1, row + 1);

    Array.from(content.matchAll(/\d+/g)).flatMap(({ '0': code, index }) => {
      const [connection] = rowsToScan
        .flatMap((row) =>
          range(index! - 1, index! + code.length).map((col) => ({
            row,
            col,
          })),
        )
        .filter(({ row, col }) => rows[row]?.[col] === '*');

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
    });
  });

  return gears
    .filter(({ ratios }) => ratios.length === 2)
    .map(({ ratios }) => ratios.reduce(multiply));
};

const result = findGears(readFile(`${__dirname}/input`)).reduce(sum);

console.log(result);
