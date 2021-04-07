import { promises as fs } from 'fs';

const path =  './tests/euler-22/some-names.txt';
export function readNamesFile(path: string): Promise<string> {
  return fs.readFile(path, { encoding: 'utf-8' });
}

export function splitNamesInFileToArray(names: string): string[] {
  return names.replace(/"|\n|\s/g, '').split(',');
}
export const makeSeatingChart = (path) =>
  readNamesFile(path)
    .then(splitNamesInFileToArray)
    // .then(
    //   while(splitNamesInFileToArray.length) seatingChart.push(splitNamesInFileToArray.splice(0,10));
    // );


console.log(makeSeatingChart);