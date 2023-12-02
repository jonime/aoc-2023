import { sum } from '../common/math';
import { readFile } from '../common/readFile';
import { getFirstAndLastDigit } from './utils/getFirstAndLastDigit';

const result = readFile(`${__dirname}/input`)
  .split(/\s*\n\s*/)
  .map(getFirstAndLastDigit)
  .map(([first, last]) => Number(first + last))
  .reduce(sum);

console.log(result);
