export const getPossibleWins = ({
  time,
  distance,
}: {
  time: number;
  distance: number;
}) => {
  let wins = 0;

  for (let hold = 1; hold < time; hold++) {
    const d = (time - hold) * hold;

    if (d > distance) {
      wins++;
    }
  }
  return wins;
};
