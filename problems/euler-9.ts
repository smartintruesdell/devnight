import { Result, Ok, Err } from '../lib/result';

/**
 * A Pythagorean triplet is a set of three natural
 * numbers, a < b < c, for which,
 *
 * a2 + b2 = c2
 *
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for
 * which a + b + c = 1000.
 *
 * Find the product abc.
 */
export function product_of_pythagorean_triplet(target_num = 1000): number {
  // The 'product' of a triplet takes the values of that triplet and
  // multiplies them together.
  //
  // To that end, I find the first valid triplet
  return (
    find_first_pythagorean_triplet(target_num)
      // Because this function can fail to find a triplet, I provide a default
      // by using `Result.unwrapOr(<default>)`
      .unwrapOr([])
      // and then I `reduce` them, multiplying each by the last.
      .reduce(prod, 1)
  );
}

/** A product of two numbrs is just multiplication with a posh accent */
const prod = (a: number, b: number): number => a * b;

/**
 * Given a target number, uses a somewhat brute-force algorithm to identify
 * the first valid pythagorean triplet.
 *
 * This is the first of our problems that can FAIL, which is interesting.
 * It means our function has to communicate to callers that its result
 * may or may not exist!
 *
 * We do this with the `Result` type.
 */
const find_first_pythagorean_triplet = (
  target_num: number
): Result<number[], Error> => {
  let c;
  for (let a = 1; a < Math.floor(target_num / 3); a += 1) {
    for (let b = a + 1; b < Math.floor(target_num / 2); b += 1) {
      c = target_num - a - b;
      if (c > b && a * a + b * b === c * c) {
        // We found one! We'll return an `Ok` type Result.
        return Ok([a, b, c]);
      }
    }
  }
  // We didn't find one, so we have to return an `Err` type result.
  return Err(new Error('No matching pythagorean triplet was found.'));
};
