import { toRoman, toArabic } from './RomanUtils'

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

describe('toRoman', () => {
  test.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [15, 'XV'],
    [16, 'XVI'],
    [50, 'L'],
    [100, 'C'],
    [456, 'CDLVI'],
    [500, 'D'],
    [999, 'CMXCIX'],
    [1000, 'M'],
    [1001, 'MI'],
    [2019, 'MMXIX'],
  ])('converts %d to %s', (input, expectedOutput) => {
    expect(toRoman(input)).toEqual(expectedOutput)
  })
})