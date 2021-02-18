import { sum_even_fibonnaci_numbers } from '../problems/euler-2';

jest.setTimeout(60000); // Sixty-Second Rule

describe('Euler Problem 2', () => {
  test.each([[4_000_000, 4613732]])(
    'sum_even_fibonnaci_numbers(%d) -> %d',
    (input: number, expected: number) => {
      const result = sum_even_fibonnaci_numbers(input);

      expect(typeof result).toBe('number');
      expect(result).toEqual(expected);
    }
  );
});
