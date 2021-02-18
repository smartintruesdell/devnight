import { sum_even_fibonnaci_numbers } from '../problems/euler-2';

jest.setTimeout(60000); // Sixty-Second Rule

describe.skip('Euler Problem 2', () => {
  test('sum_even_fibonnaci_numbers() -> number', () => {
    const result = sum_even_fibonnaci_numbers()

    expect(typeof result).toBe('number');
    expect(result).toEqual(4613732);
  });
});