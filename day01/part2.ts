import { sum } from '../common/math';
import { readFile } from '../common/readFile';
import { getFirstAndLastNumber } from './utils/getFirstAndLastNumber';

const result = readFile(`${__dirname}/input`)
  .split(/\s*\n\s*/)
  .map(getFirstAndLastNumber)
  .map(([first, last]) => Number(first + last))
  .reduce(sum);

console.log(result);
