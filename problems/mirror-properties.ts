/**
 * Here's a fun one that's a little less mathy:
 *
 * Given an object with string keys, return a new object where the keys have
 * their letters reversed.
 *
 * For an added challenge, let's require that the input object NOT be mutated
 * by the solution.
 *
 * ### Example
 * const inputObject = {
 *   first: undefined,
 *   second: undefined,
 *   third: undefined
 * };
 *
 * const result = fillWithReversedKeys(inputObject);
 * expect(result).toStrictEqual({
 *   first: 'tsrif',
 *   second: 'dnoces',
 *   third: 'driht'
 * });
 */
interface InputObjectShape { [key:string]: undefined };
interface OutputObjectShape { [key:string]: string };

export function fillWithReversedKeys(obj:InputObjectShape):OutputObjectShape {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = key.split('').reverse().join('');
    return acc;
  }, {} as OutputObjectShape);
}
