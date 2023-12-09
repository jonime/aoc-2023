export type Action = 'L' | 'R';
export type TravelMap = { [Key in Action]: Record<string, string> } & {
  ids: string[];
};

export const getActions = (input: string) =>
  input.split(/\s/)[0].trim().split('') as Action[];

export const getTravelMap = (input: string) =>
  Array.from(
    input.matchAll(/([A-Z0-9]{3}) = \(([A-Z0-9]{3}), ([A-Z0-9]{3})\)/g),
  ).reduce<TravelMap>(
    (acc, [, id, left, right]) => {
      acc.L[id] = left;
      acc.R[id] = right;
      acc.ids.push(id);
      return acc;
    },
    { L: {}, R: {}, ids: [] },
  );
