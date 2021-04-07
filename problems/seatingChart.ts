/**
 * Create a seating chart that follows the rules outlined below. Allow the function to be called in the bin-rota
 *
 * Notes:
 *
 * - All the rows will always be the same length as each other. ---Not sure about this one in terms of practicality. - JB
 * - There will be no empty spaces in the seating plan.
 * - There will be no empty arrays.
 * - Each row will be at least one seat long.
 *
 */
import {
  readNamesFile,
  splitNamesInFileToArray
} from './euler-22';

export function seatingChartDesign(names:string[]): string[][] {
  const twoDArray = [];
  while(names.length) twoDArray.push(names.splice(0,10));
  return twoDArray;
}; 

export const seatingChart = (path): Promise<string[][]> =>
  readNamesFile(path)
    .then(splitNamesInFileToArray)
    .then(seatingChartDesign)
