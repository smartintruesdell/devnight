/**
 * Each new term in the Fibonacci sequence is generated
 * by adding the previous two terms. By starting with
 * 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence
 * whose values do not exceed four million, find the
 * sum of the even-valued terms.
 */
export function sum_even_fibonnaci_numbers(
  max_value = 4_000_000
): number {
    let sum = 0;
    let i = 1;
    let j = 2;
    let term = i + j;
    let fibArray = [2];
    while(term < max_value){
      if (term % 2 === 0) {
        fibArray.push(term);
      }
      i = j;
      j = term;
      term =  i + j;
    }

    for (let k = 0, m = fibArray.length; k < m; k += 1) {
      sum += fibArray[k];
    }
  return sum;
}
