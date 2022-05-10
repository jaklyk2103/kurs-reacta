import { react, useState } from 'react'

const RomanConverter = () => {
  const [input, setInput] = useState('')
  const handleTextChange = (event) => {
    setInput(event.target.value)
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
        <span>I</span>
      </label>
      <span></span>
    </>
  )
}

export default RomanConverter