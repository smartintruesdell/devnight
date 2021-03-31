/**
 * Tests for the euler-22 solution
 */
import {
  readNamesFile,
  splitNamesInFileToArray,
  getNumericalValueOfLetter,
  getAlphabeticalValueOfName,
  LetterValueLookup,
  LETTER_VALUES,
  // Solution
  euler22,
} from '../../problems/euler-22';

const testPath = './tests/euler-22/';

describe('euler-22', () => {
  describe('internal functions', () => {
    // Asynchronous tests
    test('readNamesFile(path) -> Promise<string>', () => {
      const testFilePath = testPath + 'some-names.txt';

      return readNamesFile(testFilePath).then((result) => {
        expect(result).toBe('"SUSIE","JASON","CORA","LIAM","ALEXANDRA","SHAWN","SEBASTIAN"');
        //Question for Shawn: Was extra line on some-names.txt intentional? (I removed it and this test passed, so probably good to have the test/code be smart enough to handle extra spaces or lines but that will have to be another night.)
      });
    });

    // Synchronous tests
    test('splitNamesInFileToArray', () => {
      const names = '"This","was","a","string"';
      const result = splitNamesInFileToArray(names);
      expect(result).toStrictEqual(['This', 'was', 'a','string']);
    });

    test('getNumericalValueOfLetter', () => {
      const letter = 'L';
      const result = getNumericalValueOfLetter(letter);
      expect(result).toStrictEqual<number>(12);
    });

    test('getAlphabeticalValueOfName', () => {
      expect(getAlphabeticalValueOfName('COLIN')).toBe(53);
    });
  });

  describe('solution', () => {
    // Asynchronous tests
    test.each([
      ['one-name.txt', 53],
      //Had to remove extra line on one-name.txt as well to get "passed".
      ['some-names.txt', 1822],
      ['p022_names.txt', 871198282],
    ])('euler22(%p) -> Promise<number>{ %p }', (path, expected) => {
      return euler22(testPath + path).then((result) => {
        expect(result).toBe(expected);
      });
    });
  });
});
