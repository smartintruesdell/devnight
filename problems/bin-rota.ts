/**
 * A startup office has an ongoing problem with its bin. Due to low budgets,
 * they don't hire cleaners. As a result, the staff are left to voluntarily
 * empty the bin. It has emerged that a voluntary system is not working and
 * the bin is often overflowing. One staff member has suggested creating a
 * rota system based upon the staff seating plan.
 *
 * Create a function binRota that accepts a 2D array of names. The function
 * will return a single array containing staff names in the order that they
 * should empty the bin.
 *
 * Adding to the problem, the office has some temporary staff. This means
 * that the seating plan changes every month. Both staff members' names and
 * the number of rows of seats may change. Ensure that the function binRota
 * works when tested with these changes.
 *
 * Notes:
 *
 * - All the rows will always be the same length as each other.
 * - There will be no empty spaces in the seating plan.
 * - There will be no empty arrays.
 * - Each row will be at least one seat long.
 *
 * EXAMPLE input:
 * const seatingChart = [
 *   ['Stefan','Raj','Marie'],
 *   ['Alexa', 'Amy', 'Edward'],
 *   ['Liz', 'Claire', 'Juan'],
 *   ['Dee', 'Luke', 'Katie'],
 * ];
 */
type RotaSeatingChart = string[][];

const isEven = (rowIndex: number): boolean =>
  rowIndex === 0 || rowIndex % 2 === 0; // Zero is even!

export const binRota = (seatingChart: RotaSeatingChart): string[] => {
  let results: string[] = [];

  // For each row
  seatingChart.forEach((row: string[], rowIndex: number) => {
    //   For each person in the row moving
    if (!isEven(rowIndex)) {
      //     Right-to-Left IF the row index is odd
      // BACKWARDS
      for (let seatIndex = row.length - 1; seatIndex >= 0; seatIndex -= 1) {
        //   Add each person to the list
        results.push(row[seatIndex]);
      }
    } else {
      //     Left-to-Right IF the row index is even
      // FORWARDS
      for (let seatIndex = 0; seatIndex < row.length; seatIndex += 1) {
        //   Add each person to the list
        results.push(row[seatIndex]);
      }
    }
  });

  return results;
};

const flipIfRowIsOdd = (rowIndex: number, row: string[]): string[] =>
  isEven(rowIndex) ? row : [...row].reverse();

export const binRota2 = (seatingChart: RotaSeatingChart): string[] =>
  seatingChart.reduce(
    (acc: string[], row: string[], index: number): string[] =>
      acc.concat(flipIfRowIsOdd(index, row)),
    [] as string[]
  );
