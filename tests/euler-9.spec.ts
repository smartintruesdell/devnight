import { product_of_pythagorean_triplet } from '../problems/euler-9';

jest.setTimeout(60000); // Sixty-Second Rule

describe('Euler Problem 9', () => {
  test.each([[1000, 31_875_000]])(
    'product_of_pythagorean_triplet() -> number',
    (input: number, expected: number) => {
      const result = product_of_pythagorean_triplet(input);

      expect(typeof result).toBe('number');
      expect(result).toEqual(expected);
    }
  );
});
