import { toRoman } from './RomanUtils'

describe('toRoman', () => {
  test.each([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
  ])('Should convert %d to %s', (input, expectedOutput) => {
    expect(toRoman(input)).toBe(expectedOutput)
  })
})