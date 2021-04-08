/**
 * Using p022-names.txt, a 46K text file
 * containing over five-thousand first names, begin by sorting it into
 * alphabetical order. Then working out the alphabetical value for each name,
 * multiply this value by its alphabetical position in the list to obtain a
 * name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which
 * is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So,
 * COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */
import { promises as fs } from 'fs';

/** Given a file path, reads the UTF-8 text contents of that file. */
export function readNamesFile(path: string): Promise<string> {
  return fs.readFile(path, { encoding: 'utf-8' });
}

/**
 * Given a string of "quoted", comma-separated names, splits them into an array
 * of discreet names.
 */
export function splitNamesInFileToArray(names: string): string[] {
  return names.replace(/"|\n/g, '').split(',');
}

/** Sort an array alphabetically (default) */
export function sortListAlphabetically(names: string[]): string[] {
  return names.sort();
}

/** A constant lookup "map" table from char to number */
export type LetterValueLookup = { [key: string]: number };
export const LETTER_VALUES: LetterValueLookup = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
].reduce((acc: LetterValueLookup, letter: string, i: number) => {
  // Reduce from *many* letters to *one* LetterValueMap
  // by assigning the value of LetterValueMap[letter] to the index of the letter
  // plus one:
  acc[letter] = i + 1;

  return acc;
}, {} as LetterValueLookup);

/** Given a letter, uses the `LETTER_VALUES` lookup table to return a value */
export function getNumericalValueOfLetter(letter: string): number {
  return LETTER_VALUES[letter];
}

/** Given a name string, divide that name into letters and sum their value */
export function getAlphabeticalValueOfName(name: string): number {
  // 1. A name is a collection of letters, so let's split the name into individual letters.
  const letters = name.split('');
  // 2. Let's use the getNumericalValueOfLetter function on each letter
  const numericalValues = letters.map(getNumericalValueOfLetter);
  // 3. Let's sum the results together and return
  return numericalValues.reduce(add, 0);
}

/** Given two numbers, adds them together */
function add(a: number, b: number): number {
  return a + b;
}

export const euler22 = (path): Promise<number> =>
  // Using [a text file]
  readNamesFile(path)
    .then(splitNamesInFileToArray)
    // begin by sorting it into alphabetical order.
    .then(sortListAlphabetically)
    // Then working out the alphabetical value for each name,
    .then((names) => names.map((name) => getAlphabeticalValueOfName(name)))
    // multiply this value by its alphabetical position in the list to obtain a
    // name score.
    .then((nameScores) =>
      nameScores.map((score, position) => score * (position + 1))
    )
    // What is the total of all the name scores in the file?
    .then((nameValues) => nameValues.reduce(add, 0));
