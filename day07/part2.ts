import { sum } from '../common/math';
import { readFile } from '../common/readFile';
import { Hand, getGames } from './utils';

const faceCardMap: Record<string, number | undefined> = {
  A: 14,
  K: 13,
  Q: 12,
  T: 10,
  J: 1,
};

const getValue = (card: string) => faceCardMap[card] || parseInt(card, 10);

const getHighScore = (input: string) =>
  input
    .split('')
    .reverse()
    .map((card, index) => getValue(card) * Math.pow(16, index + 1))
    .reduce(sum);

const getHand = (cards: string): Hand => {
  const sorted = cards
    .split('')
    .sort((a, b) => getValue(b) - getValue(a))
    .join('');

  if (sorted.match(/^(.)(\1|J){4}$/)) {
    return Hand.FiveOfKind;
  } else if (sorted.match(/(.).?(\1|J).?(\1|J).?(\1|J)/)) {
    return Hand.FourOfKind;
  } else if (
    sorted.match(
      /(?<a>.)(\k<a>|J){2}(?<b>.)(\k<b>|J)|(?<c>.)(\k<c>|J)(?<d>.)(\k<d>|J){2}/,
    )
  ) {
    return Hand.FullHouse;
  } else if (sorted.match(/(?<x>.)(.*(\k<x>|J).*){2}/)) {
    return Hand.ThreeOfKind;
  } else if (
    sorted.match(
      /(?<a>.)(?=.*(\k<a>|J).*).*(?<b>.)(?=.*?(\k<b>).*)|(?<c>.)(?=.*(\k<c>).*).*(?<d>.)(?=.*?(\k<d>|J).*)/,
    )
  ) {
    return Hand.TwoPair;
  } else if (sorted.match(/(?<x>.)(.*(\k<x>|J).*)/)) {
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

console.log('Result:', result); // 251003917
