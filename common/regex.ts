export const getNumbers = (input: string) =>
  Array.from(input.matchAll(/\d+/g)).map(Number);
