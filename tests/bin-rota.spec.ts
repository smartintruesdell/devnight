import { binRota, binRota2 } from '../problems/bin-rota';

const seatingChart = [
  ['Stefan', 'Raj', 'Marie'],
  ['Alexa', 'Amy', 'Edward'],
  ['Liz', 'Claire', 'Juan'],
  ['Dee', 'Luke', 'Katie'],
];

const expected = [
  'Stefan',
  'Raj',
  'Marie',
  'Edward',
  'Amy',
  'Alexa',
  'Liz',
  'Claire',
  'Juan',
  'Katie',
  'Luke',
  'Dee',
];

describe('binRota', () => {
  describe('solutions', () => {
    test('solution', () => {
      // Given

      // When
      const result = binRota(seatingChart);

      // Then
      expect(result).toStrictEqual(expected);
    });
    test('solution2', () => {
      // Given

      // When
      const result = binRota2(seatingChart);

      // Then
      expect(result).toStrictEqual(expected);
    });
  });
  // describe('race', () => {
  //   test('binRota', () => {
  //     for (let i = 0; i < 500; i += 1) {
  //       expect(binRota(seatingChart)).toStrictEqual(expected);
  //     }
  //   });
  //   test('binRota2', () => {
  //     for (let i = 0; i < 500; i += 1) {
  //       expect(binRota2(seatingChart)).toStrictEqual(expected);
  //     }
  //   });
  // });
});
