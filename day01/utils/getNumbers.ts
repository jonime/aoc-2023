const numberMap: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const numberRegex = new RegExp('\\d|' + Object.keys(numberMap).join('|'), 'g');

export const getNumbers = (input: string) => {
  let match: RegExpMatchArray | null = null;
  const numbers: string[] = [];

  while ((match = numberRegex.exec(input)) !== null) {
    const number = match[0];
    numberRegex.lastIndex = match.index! + 1;
    numbers.push(numberMap[number] || number);
  }

  return numbers;
};
