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
  let i = 1;
  let j = 2;
  let k = Math.sqrt(i*i + j*j);
  let sum = i+j+k;
  let product = i*j*k;
  while(sum != target_num) {
    if(sum > target_num) {
      i += 1;
      j = i+1;
    } else {
      j +=1
    }
    k = Math.sqrt(i*i + j*j);
    sum = i + j + k;
  }
  product = i*j*k;
  return product;
}