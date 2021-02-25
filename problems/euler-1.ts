/**
 * From https://projecteuler.net/
 * 
 * If we list all the natural numbers below 10 that are 
 * multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
 * these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

export function find_multiples_of_three_or_five(
  multiples_of:number[] = [3,5],
  max_value:number = 1000
):number {
  let sum = 0;

  // For each number in our set from 0 to max_value...
  for (let i = 0; i < max_value; i += 1) {
    // For each multiples_of value that could match...
    for (let j = 0; j < multiples_of.length; j += 1) {
      // If this i is a multiple of multiples_of[j]...
      if (i % multiples_of[j] === 0) {
        // Add it to the sum.
        sum += i;
        break;
      }
    }
  }
  return sum;
}
