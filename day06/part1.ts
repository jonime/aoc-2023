import { multiply } from '../common/math';
import { readFile } from '../common/readFile';
import { getNumbers } from '../common/regex';
import { getPossibleWins } from './getPossibleWins';

const getRaces = () => {
  const [times, distances] = readFile(`${__dirname}/input`).split(/\n/);
  const timeArray = getNumbers(times);
  const distanceArray = getNumbers(distances);
  return timeArray.map((time, i) => ({
    time: Number(time),
    distance: Number(distanceArray[i]),
  }));
};

const result = getRaces().map(getPossibleWins).reduce(multiply);
console.log('Result:', result);
