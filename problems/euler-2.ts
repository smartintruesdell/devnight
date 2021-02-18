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
export function sum_even_fibonnaci_numbers(max = 4_000_000): number {
  return fib_less_than(max).filter(is_even).reduce(add, 0);
}

/** Memoize a function such that it locally caches results */
const memoize_one = <T, U>(fn: (arg0: T) => U) => {
  const results: { [key: string]: U } = {};

  return (arg0: T): U => {
    const key = `${arg0}`;

    if (!Object.hasOwnProperty.call(results, key)) {
      results[key] = fn(arg0);
    }

    return results[key];
  };
};

/** A recursive generalization of the fibonnaci number of n */
const fib = (n: number): number =>
  n <= 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);

/** A memoized(cached) optimization of `fib` */
const fib_memo = memoize_one(fib);

/** Generates the list of fibonnaci numbers below some threshold */
const fib_less_than = memoize_one((max: number): number[] => {
  const results = [];
  let last = 0;
  let i = 0;

  while (last <= max) {
    last = fib_memo(i++);
    results.push(last);
  }

  return results;
});

/** Simple generalization over the + operator */
const add = (a: number, b: number): number => a + b;

/** Predicate to determine if a number is even */
const is_even = (n: number): boolean => (n === 0 ? false : n % 2 === 0);
