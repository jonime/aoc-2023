import { readFile } from '../utils/readFile';
import { getFirstAndLastNumber } from './utils/getFirstAndLastNumber';

const sum = readFile(`${__dirname}/input`)
  .split(/\s*\n\s*/)
  .map(getFirstAndLastNumber)
  .map(([first, last]) => Number(first + last))
  .reduce((acc, num) => acc + num, 0);

console.log(sum);
