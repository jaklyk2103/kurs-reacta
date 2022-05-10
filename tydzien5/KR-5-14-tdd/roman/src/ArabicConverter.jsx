import { useState } from 'react'
import { toArabic } from './RomanUtils'

const ArabicConverter = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const handleTextChange = (event) => {
    setInput(event.target.value)
    setOutput(toArabic(event.target.value))
  }

  return(
    <>
      <div>Arabic Converter</div>
      <label>
        Roman
        <input type="text" onChange={handleTextChange} value={input} />
      </label>

      <label>
        Arabic
        <span>{output}</span>
      </label>
      <span></span>
    </>
  )
}

export default ArabicConverter