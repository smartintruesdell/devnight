import { sum_even_fibonnaci_numbers } from '../problems/euler-2';

jest.setTimeout(60000); // Sixty-Second Rule

describe('Euler Problem 2', () => {
  test.each([
    [10, 10],
    [4_000_000, 4613732]
])('sum_even_fibonnaci_numbers(%d) -> %d', (input:number, expected:number) => {
    expect(sum_even_fibonnaci_numbers(input)).toEqual(expected);
});
});
