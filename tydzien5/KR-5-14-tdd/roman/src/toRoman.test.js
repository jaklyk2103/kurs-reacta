import { toRoman } from './RomanUtils'

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