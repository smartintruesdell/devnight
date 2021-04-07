/**
 * Tests for the makeSeatingChart solution
 */
import {
  readNamesFile,
  splitNamesInFileToArray,
} from '../problems/euler-22';
import { 
  seatingChart 
} from '../problems/seatingChart';

const testPath = './tests/euler-22/';

describe('makeSeatingChart', () => {
  describe('internal functions', () => {
    // Asynchronous tests
    test('readNamesFile(path) -> Promise<string>', () => {
      const testFilePath = testPath + 'some-names.txt';

      return readNamesFile(testFilePath).then((result) => {
        expect(result).toBe(
          '"SUSIE","JASON","CORA","LIAM","ALEXANDRA","SHAWN","SEBASTIAN"'
        );
      });
    });

    // Synchronous tests
    test.each([
      ['"This","was","a","string"', ['This', 'was', 'a', 'string']],
      [
        `"Colin"
      `,
        ['Colin'],
      ],
    ])('splitNamesInFileToArray(%p) -> (%p)', (names, expected) => {
      const result = splitNamesInFileToArray(names);
      expect(result).toStrictEqual(expected);
    });
  });

  describe('solution', () => {
    // Asynchronous tests
    test.each([
      //['one-name.txt', "TBD"],
      ['some-names.txt', [["SUSIE","JASON","CORA","LIAM","ALEXANDRA","SHAWN","SEBASTIAN"]]]
      //['p022_names.txt', "TBD"],
    ])('makeSeatingChart(%p) -> Promise<string[][]>{ %p }', (path, expected) => {
      return seatingChart(testPath + path).then((result) => {
        expect(result).toStrictEqual(expected);
      });
    });
  });
});
