const numberToRomanMap = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

export const toArabic = (roman) => {
  let romanString = roman 
  let arabic = 0
  const numbers = Object.keys(numberToRomanMap)
  const romanValues = Object.values(numberToRomanMap)

  while ( romanString.length > 0 ) {
    let i = romanValues.length - 1
    while(romanValues[i] !== romanString.slice(0, romanValues[i].length)) {
      i--
    }
    arabic += Number(numbers[i])
    romanString = romanString.slice(romanValues[i].length)
  }

  return arabic
}

export const toRoman = (input) => {
  let inputNumber = input
  let output = ''
  const numbers = Object.keys(numberToRomanMap)
  const romanValues = Object.values(numberToRomanMap)

  while (inputNumber > 0) {
    let i = numbers.length - 1;
    while (inputNumber < numbers[i]) {
      i--
    }
    output += romanValues[i]
    inputNumber -= numbers[i]
  }

  return output
}