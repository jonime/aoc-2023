export const sum = (acc: number, number: number) => acc + number;

export const multiply = (acc: number, number: number) => acc * number;

/**
 * Greatest Common Divisor
 */
export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);

/**
 * Least Common Multiple
 */
export const lcm = (a: number, b: number): number =>
  Math.abs(a * b) / gcd(a, b);

export const calculateLcm = (numbers: number[]) =>
  numbers.reduce((acc, number) => lcm(acc, number));
