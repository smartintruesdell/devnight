/**
 * Tests for the euler-22 solution
 */
import {
  readNamesFile,
  splitNamesInFileToArray,
  getNumericalValueOfLetter,
  getAlphabeticalValueOfName,
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
        // TODO: Test the results here, remove the following:
        throw new Error('Test Not-Yet-Implemented');
      });
    });

    // Synchronous tests
    test('splitNamesInFileToArray', () => {
      // TODO: Test this function, remove the following:
      throw new Error('Test Not-Yet-Implemented');
    });

    test('getNumericalValueOfLetter', () => {
      // TODO: Test this function, remove the following:
      throw new Error('Test Not-Yet-Implemented');
    });

    test('getAlphabeticalValueOfName', () => {
      expect(getAlphabeticalValueOfName('COLIN')).toBe(53);
      // TODO: Test this function, remove the following:
      throw new Error('Test Not-Yet-Implemented');
    });
  });

  describe('solution', () => {
    // Asynchronous tests
    test.each([
      ['one-name.txt', 53],
      ['some-names.txt', 1822],
      ['p022_names.txt', 871198282],
    ])('euler22(%p) -> Promise<number>{ %p }', (path, expected) => {
      return euler22(testPath + path).then((result) => {
        expect(result).toBe(expected);
      });
    });
  });
});
