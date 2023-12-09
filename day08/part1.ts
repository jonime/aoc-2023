import { readFile } from '../common/readFile';
import { Action, TravelMap, getActions, getTravelMap } from './utils';

const travel = (
  map: TravelMap,
  actions: Action[],
  from: string,
  to: string,
) => {
  let current = from;
  let steps = 0;

  while (true) {
    for (const action of actions) {
      current = map[action][current];
      steps++;
    }

    if (current === to) {
      return steps;
    }
  }
};

const content = readFile(`${__dirname}/input`);

const travelMap = getTravelMap(content);

const actions = getActions(content);

const result = travel(travelMap, actions, 'AAA', 'ZZZ');

console.log('Result:', result);
