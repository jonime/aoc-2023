import { getNumbers } from './getNumbers';

export const getFirstAndLastNumber = (input: string) => {
  const numbers = getNumbers(input);
  const first = numbers.at(0);
  const last = numbers.at(-1);
  if (first === undefined || last === undefined) {
    throw new Error('Numbers not found');
  }
  return [first, last] as const;
};
