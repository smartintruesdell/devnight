/** Tests for problems/mirror-properties.ts */
import { fillWithReversedKeys } from '../problems/mirror-properties';

describe('fillWithReversedKeys', () => {
  // Add tests for component functions, if necessary

  // Solution tests are prebaked, you can leave them alone.
  describe('solution', () => {
    test.each([
      [{ first: undefined }, { first: 'tsrif' }],
      [
        { first: undefined, second: undefined },
        { first: 'tsrif', second: 'dnoces' },
      ],
      [
        { first: undefined, second: undefined, third: undefined },
        { first: 'tsrif', second: 'dnoces', third: 'driht' },
      ],
    ])('fillWithReversedKeys(%p) -> %p', (inputObject, expected) =>
      expect(fillWithReversedKeys(inputObject)).toStrictEqual(expected)
      );

    test('fillWithReversedKeys does NOT mutate the original object', () => {
      // given
      const inputObject = {
        trouper: undefined
      };

      // when
      const result = fillWithReversedKeys(inputObject);

      // then
      expect(result).toStrictEqual({ trouper: 'repuort' });
      expect(inputObject).not.toStrictEqual(result);
    });
  });
});
