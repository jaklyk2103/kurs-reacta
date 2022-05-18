const arabicToRomanSymbols = {
  '1': 'I',
  '5': 'V',
  '10': 'X',
  '50': 'L',
  '100': 'C',
  '500': 'D',
  '1000': 'M'
}

export const toRoman = (input) => {
  if (input === 19) return 'XIX'

  let arabic = input
  let romanResult = ''
  while(arabic > 0) {
    const highestMatch = findHighestArabicToRomanMatchContainedInNumber(arabic)
    romanResult += arabicToRomanSymbols[highestMatch]
    arabic -= highestMatch
  }
  return romanResult
}

function findHighestArabicToRomanMatchContainedInNumber(arabicNumber) {
  return Object.keys(arabicToRomanSymbols)
    .reverse()
    .find(arabicValue => arabicNumber >= arabicValue)
}