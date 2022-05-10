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

const toRoman = (input) => {
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

export default toRoman