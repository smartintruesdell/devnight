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
  return find_first_pythagorean_triplet(target_num).reduce(prod, 1);
}

const prod = (a: number, b: number): number => a * b;

const find_first_pythagorean_triplet = (target_num: number) => {
  let c;
  for (let a = 1; a < Math.floor(target_num / 3); a += 1) {
    for (let b = a + 1; b < Math.floor(target_num / 2); b += 1) {
      c = target_num - a - b;
      if (c > b && a * a + b * b === c * c) {
        return [a, b, c];
      }
    }
  }
  throw new Error('No matching pythagorean triplet was found.');
};
