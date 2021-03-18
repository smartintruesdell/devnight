import {
  fillWithReversedKeys,
  InputObjectShape,
} from '../problems/mirror-properties';

describe.only('fillWithReversedKeys', () => {
  test('reverses keys', () => {
    const inputObject: InputObjectShape = {
      first: undefined,
      second: undefined,
      third: undefined,
    };

    expect(fillWithReversedKeys(inputObject)).toStrictEqual({
      first: 'tsrif',
      second: 'dnoces',
      third: 'driht',
    });
  });
});
