import { find_multiples_of_three_or_five } from '../problems/euler-1';

jest.setTimeout(60000); // Sixty-Second Rule

describe('Euler Problem 1', () => {
  test('find_multiples_of_three_or_five() -> number', () => {
    const result = find_multiples_of_three_or_five();

    expect(typeof result).toBe('number');
    expect(result).toEqual(233168);
  });
});