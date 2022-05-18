import { toRoman } from './RomanUtils'

describe('toRoman', () => {
  test('Should convert 1 to I', () => {
    expect(toRoman(1)).toBe('I')
  })
})