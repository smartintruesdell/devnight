import { product_of_pythagorean_triplet } from '../problems/euler-9';

jest.setTimeout(60000); // Sixty-Second Rule

describe.skip('Euler Problem 9', () => {
  test('product_of_pythagorean_triplet() -> number', () => {
    const result = product_of_pythagorean_triplet()

    expect(typeof result).toBe('number');
    expect(result).toEqual(31875000);
  });
});