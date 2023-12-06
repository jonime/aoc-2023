import { readFile } from '../common/readFile';
import { getPossibleWins } from './getPossibleWins';

const getRace = () => {
  const [timeRow, distanceRow] = readFile(`${__dirname}/input`).split(/\n/);
  const time = Number(timeRow.replace(/[^\d]/g, ''));
  const distance = Number(distanceRow.replace(/[^\d]/g, ''));
  return { time, distance };
};

const result = getPossibleWins(getRace());
console.log('Result:', result);
