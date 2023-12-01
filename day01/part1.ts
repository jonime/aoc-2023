import { readFile } from '../utils/readFile';
import { getFirstAndLastDigit } from './utils/getFirstAndLastDigit';

const sum = readFile(`${__dirname}/input`)
  .split(/\s*\n\s*/)
  .map(getFirstAndLastDigit)
  .map(([first, last]) => Number(first + last))
  .reduce((acc, num) => acc + num);

console.log(sum);
