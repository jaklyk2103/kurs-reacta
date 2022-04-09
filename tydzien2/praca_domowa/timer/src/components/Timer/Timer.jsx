const normalizeFromMinToMax = (min, max) => {
  return (value) => {
    return value > max ? max : value < min ? min : value
  }
}

const doubleDigitZerosFormatter = (value) => {
  return (Number(value) < 10) ? `0${value.toString()}` : value.toString()
}

const tripleDigitZerosFormatter = (value) => {
  return (Number(value) < 100) ? `0${doubleDigitZerosFormatter(value.toString())}` : value.toString()
}

export const Timer = ({ hours=null, minutes='00', seconds='00', milliseconds=null }) => {
  const normalizeFrom0To23 = normalizeFromMinToMax(0, 23)
  const normalizeFrom0To59 = normalizeFromMinToMax(0, 59)
  const normalizeFrom0To999 = normalizeFromMinToMax(0, 999)
  
  const displayedHours = hours !== null ? `${doubleDigitZerosFormatter(normalizeFrom0To23(hours))}:` : '' 
  const displayedMinutes = doubleDigitZerosFormatter(normalizeFrom0To59(minutes))
  const displayedSeconds = doubleDigitZerosFormatter(normalizeFrom0To59(seconds))
  const displayedMilliseconds = milliseconds !== null ? `.${tripleDigitZerosFormatter(normalizeFrom0To999(milliseconds))}` : ''

  return (
    <h2>{displayedHours}{displayedMinutes}:{displayedSeconds}{displayedMilliseconds}</h2>
  )
}