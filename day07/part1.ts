import { sum } from '../common/math';
import { readFile } from '../common/readFile';
import { Hand, getGames } from './utils';

const faceCardMap: Record<string, number | undefined> = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  T: 10,
};

const getHighScore = (input: string) =>
  input
    .split('')
    .reverse()
    .map(
      (card, index) =>
        (faceCardMap[card] || parseInt(card, 10)) * Math.pow(16, index + 1),
    )
    .reduce(sum);

const getHand = (cards: string): Hand => {
  const sorted = cards.split('').sort().join('');

  if (sorted.match(/^(.)\1\1\1\1$/)) {
    return Hand.FiveOfKind;
  } else if (sorted.match(/(.)\1\1\1/)) {
    return Hand.FourOfKind;
  } else if (sorted.match(/^(.)\1\1(.)\2|(.)\3(.)\4\4$/)) {
    return Hand.FullHouse;
  } else if (sorted.match(/(.)\1\1/)) {
    return Hand.ThreeOfKind;
  } else if (sorted.match(/(.)\1.?(.)\2/)) {
    return Hand.TwoPair;
  } else if (sorted.match(/(.)\1/)) {
    return Hand.Pair;
  }

  return Hand.High;
};

const sortedGames = getGames(readFile(`${__dirname}/input`))
  .map((row) => ({
    ...row,
    hand: getHand(row.cards),
    highScore: getHighScore(row.cards),
  }))
  .sort((a, b) =>
    a.hand !== b.hand ? a.hand - b.hand : a.highScore - b.highScore,
  );

const result = sortedGames
  .map(({ bid }, index) => bid * (index + 1))
  .reduce(sum);

console.log('Result:', result); // 251029473
