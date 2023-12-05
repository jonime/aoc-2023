import { readFile } from '../common/readFile';
import { getNumbers } from '../common/regex';
import { throwError } from '../common/throw';
import { convert } from './utils/convert';

const getSeeds = (input: string) => {
  const [seedRow] = input.match(/seeds: .*/) || throwError('Cannot get seeds');
  return getNumbers(seedRow);
};

const content = readFile(`${__dirname}/input`);
const seeds = getSeeds(content);

const minLocation = Math.min(...seeds.map((seed) => convert(seed)));

minLocation;
