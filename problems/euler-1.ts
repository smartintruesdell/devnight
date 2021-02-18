/**
 * From https://projecteuler.net/
 *
 * If we list all the natural numbers below 10 that are
 * multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
 * these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

// Definitions ////////////////////////////////////////////////////////////////

/** A number is a multiple of a divisor if its modulus of the divisor is 0. */
const is_multiple_of = (divisor: number) => (n:number):boolean => n % divisor === 0;

/** Checks a set of divisors against a number for is_multiple_of */
const is_any_multiple_of = (divisors: number[]) => (n:number):boolean =>
    divisors.reduce(
        (acc:boolean, divisor:number) => (acc || is_multiple_of(divisor)(n)),
        false
    );

/**
 * Finds the SUM of all matching multiples of an array of divisors
 * below a given threshold.
 *
 * @param { number[] } divisors
 *  Values less than the threshold that are even multiples of at
 *  least one member of this array are added to the sum.
 * @param { number } max_value The upward bound (exclusive) to check
 *
 * @returns { number } Returns the sum of all matching values.
 */
export function find_even_multiples(
  divisors: number[] = [3, 5],
  max_value = 1000
): number {
  let sum = 0;

    // For each number in our set from 0 to max_value...
    for (let i = 0; i < max_value; i += 1) {
        // For each divisor that could match...
        if (is_any_multiple_of(divisors)(i)) {
            // Add matching values to the sum
            sum += i;
        }
    }

    // Return the sum
    return sum;
}

export const find_multiples_of_three_or_five = (max_value = 1000): number =>
  find_even_multiples([3, 5], max_value);
