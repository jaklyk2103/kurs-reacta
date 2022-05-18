import { toRoman } from './RomanUtils'

describe('toRoman', () => {
  test('Should convert 1 to I', () => {
    expect(toRoman(1)).toBe('I')
  })
  test('Should convert 10 to X', () => {
    expect(toRoman(10)).toBe('X')
  })
})