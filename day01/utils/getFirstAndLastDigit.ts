export const getFirstAndLastDigit = (input: string) => {
  const [, first] = input.match(/^[^\d]*(\d)/)!;
  const [, last] = input.match(/(\d)[^\d]*$/)!;
  return [first, last] as const;
};
