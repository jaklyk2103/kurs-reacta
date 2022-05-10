import { useState } from 'react'
import { toRoman } from './RomanUtils'

const RomanConverter = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const handleTextChange = (event) => {
    setInput(event.target.value)
    setOutput(toRoman(Number(event.target.value)))
  }

  return(
    <>
      <div>Roman Converter</div>
      <label>
        Arabic
        <input type="text" onChange={handleTextChange} value={input} />
      </label>

      <label>
        Roman
        <span>{output}</span>
      </label>
      <span></span>
    </>
  )
}

export default RomanConverter