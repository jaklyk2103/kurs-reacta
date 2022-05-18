const arabicToRomanSymbols = {
  '1': 'I',
  '4': 'IV',
  '5': 'V',
  '9': 'IX',
  '10': 'X',
  '50': 'L',
  '100': 'C',
  '500': 'D',
  '1000': 'M'
}

export const toRoman = (input) => {
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