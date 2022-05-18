const arabicToRomanSymbols = {
  '1': 'I',
  '4': 'IV',
  '5': 'V',
  '9': 'IX',
  '10': 'X',
  '40': 'XL',
  '50': 'L',
  '90': 'XC',
  '100': 'C',
  '400': 'CD',
  '500': 'D',
  '900': 'CM',
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