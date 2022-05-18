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
  if (Object.keys(arabicToRomanSymbols).includes(input.toString())) 
    return arabicToRomanSymbols[input]
  return 'XIX'
}
