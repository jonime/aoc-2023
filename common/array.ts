export const range = (start: number, end: number) =>
  Array(end - start + 1)
    .fill(true)
    .map((_, index) => start + index);

export const isUnique = <T>(item: T, index: number, array: T[]) =>
  array.indexOf(item) === index;
