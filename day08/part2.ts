import { calculateLcm } from '../common/math';
import { readFile } from '../common/readFile';
import { getActions, getTravelMap } from './utils';

const content = readFile(`${__dirname}/input`);

const travelMap = getTravelMap(content);

const actions = getActions(content);

const ghosts = travelMap.ids.filter((id) => id.endsWith('A'));

const stepsPerGhost = ghosts.map((ghost) => {
  let steps = 0;
  let current = ghost;
  while (true) {
    for (const action of actions) {
      steps++;
      current = travelMap[action][current];
      if (current.endsWith('Z')) {
        return steps;
      }
    }
  }
});

const result = calculateLcm(stepsPerGhost);
console.log('Result:', result);
