import { throwError } from '../common/throw';

export enum Hand {
  FiveOfKind = 7,
  FourOfKind = 6,
  FullHouse = 5,
  ThreeOfKind = 4,
  TwoPair = 3,
  Pair = 2,
  High = 1,
}

export const getGames = (input: string) =>
  input.split(/\s*\n\s*/).map((line) => {
    const [, cards, bid] =
      line.match(/^(\S+) (\d+)$/) || throwError('Cannot parse line');

    return { cards, bid: Number(bid) };
  });
