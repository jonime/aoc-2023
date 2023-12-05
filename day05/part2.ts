import { readFile } from '../common/readFile';
import { throwError } from '../common/throw';
import { Worker } from 'worker_threads';

const getSeedGroups = (input: string) => {
  const [seedRow] = input.match(/seeds: .*/) || throwError('Cannot get seeds');

  return Array.from(seedRow.matchAll(/(\d+) (\d+)/g)).flatMap(
    ([, start, length]) => ({
      start: Number(start),
      length: Number(length),
    }),
  );
};

const content = readFile(`${__dirname}/input`);

Promise.all(
  getSeedGroups(content).map(
    (group) =>
      new Promise<number>((resolve) => {
        const worker = new Worker(`${__dirname}/worker.ts`, {
          execArgv: ['-r', 'ts-node/register/transpile-only'],
        });

        worker.postMessage(group);

        worker.on('message', ({ min }: { min: number }) => {
          console.log('Sub-result:', min);
          resolve(min);
        });
      }),
  ),
).then((results) => {
  const result = Math.min(...results);
  console.log('Result:', result);
});
