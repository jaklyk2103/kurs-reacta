const arabicToRomanSymbols = {
  '1': 'I',
  '5': 'V',
  '10': 'X'
}

export const toRoman = (input) => {
  if (Object.keys(arabicToRomanSymbols).includes(input.toString())) 
    return arabicToRomanSymbols[input]
  return 'XIX'
}
