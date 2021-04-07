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

 const inputObject: any = {
  first: undefined,
  second: undefined,
  third: undefined
};

export function reverseString(string: string) {
  return string.split("").reverse().join("");
}

export function outputObject(inputObject: object) {
  const outputObj = Object.keys(inputObject).reduce(
    (newObj: any, key) => {
      newObj[key] = reverseString(key);
      return newObj;
    },
    {}
  );
  return outputObj;
};

console.log(outputObject(inputObject));


interface InputObjectShape { [key:string]: undefined };
interface OutputObjectShape { [key:string]: string };

export function fillWithReversedKeys(obj:InputObjectShape):OutputObjectShape {
  return {};
}
