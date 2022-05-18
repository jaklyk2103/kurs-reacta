import { toRoman } from './RomanUtils'

describe('toRoman symbols convertion', () => {
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

describe('toRoman complex values convertion ', () => {
  test.each([
    [4, 'IV'],
    [6, 'VI'],
    [9, 'IX'],
    [11, 'XI'],
    [13, 'XIII'],
    [17, 'XVII'],
  ])('Should convert %d to %s', (input, expectedOutput) => {
    expect(toRoman(input)).toBe(expectedOutput)
  })
})