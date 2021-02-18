import { find_multiples_of_three_or_five } from '../problems/euler-1';

jest.setTimeout(60000); // Sixty-Second Rule

describe('Euler Problem 1', () => {
  test.each([[1000, 233168]])(
    'find_multiples_of_three_or_five(%d) -> %d',
    (input: number, expected: number) => {
      const result = find_multiples_of_three_or_five(input);

      expect(typeof result).toBe('number');
      expect(result).toEqual(expected);
    }
  );
});
