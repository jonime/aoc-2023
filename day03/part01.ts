import { range } from '../common/array';
import { sum } from '../common/math';
import { readFile } from '../common/readFile';

export const findParts = (input: string) =>
  input.split(/\s*\n\s*/).flatMap((content, row, rows) => {
    const rowsToScan = range(row - 1, row + 1);

    return Array.from(content.matchAll(/\d+/g))
      .filter(({ '0': code, index }) =>
        rowsToScan
          .flatMap((row) =>
            range(index! - 1, index! + code.length).map((col) => ({
              row,
              col,
            })),
          )
          .some(({ row, col }) => rows[row]?.[col]?.match(/^[^.0-9]$/)),
      )
      .map(([code]) => Number(code));
  });

const result = findParts(readFile(`${__dirname}/input`)).reduce(sum);

console.log(result);
