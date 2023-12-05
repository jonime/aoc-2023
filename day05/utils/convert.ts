import { readFile } from '../../common/readFile';
import { getNumbers } from '../../common/regex';

const getMaps = (input: string) =>
  Array.from(input.matchAll(/(\w+)-to-(\w+) map:([\s\d]+)/gm)).map(
    ([, , , map]) => {
      const rules = map
        .trim()
        .split(/\s*\n\s*/)
        .map((row) => {
          const [destination, source, range] = getNumbers(row);
          return {
            sourceFrom: source,
            sourceTo: source + range - 1,
            offset: destination - source,
          };
        });

      return (value: number): number => {
        const rule = rules.find(
          ({ sourceFrom, sourceTo }) =>
            value >= sourceFrom && value <= sourceTo,
        );

        return rule ? value + rule.offset : value;
      };
    },
  );

const content = readFile(`${__dirname}/../input`);

const maps = getMaps(content);

export const convert = (value: number) =>
  maps.reduce((acc, mapper) => mapper(acc), value);
