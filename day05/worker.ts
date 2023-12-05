import { parentPort } from 'worker_threads';
import { throwError } from '../common/throw';
import { convert } from './utils/convert';

const port = parentPort || throwError('Port not found');

port.on('message', ({ start, length }: { start: number; length: number }) => {
  let min = Number.MAX_VALUE;

  for (let i = start; i < start + length; i++) {
    const value = convert(i);
    if (value < min) {
      min = value;
    }
  }

  port.postMessage({ min });
  port.close();
});
