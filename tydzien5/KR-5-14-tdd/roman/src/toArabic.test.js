import { toArabic } from './RomanUtils'

describe('toArabic', () => {
  test.each([
    ['I', 1],
    ['II', 2],
    ['III', 3],
    ['IV', 4],
    ['V', 5],
    ['VI', 6],
    ['VII', 7],
    ['VIII', 8],
    ['IX', 9],
    ['X', 10],
    ['XV', 15],
    ['XVI', 16],
    ['L', 50],
    ['C', 100],
    ['CDLVI', 456],
    ['D', 500],
    ['CMXCIX', 999],
    ['M', 1000],
    ['MI', 1001],
    ['MMXIX', 2019],
  ])('converts %s to %d', (input, expectedOutput) => {
    expect(toArabic(input)).toEqual(expectedOutput)
  })
})