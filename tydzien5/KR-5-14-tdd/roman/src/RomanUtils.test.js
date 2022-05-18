import { toRoman } from './RomanUtils'

describe('toRoman', () => {
  test.each([
    [1, 'I'],
    [10, 'X'],
  ])('Should convert %d to %s', (input, expectedOutput) => {
    expect(toRoman(input)).toBe(expectedOutput)
  })
})