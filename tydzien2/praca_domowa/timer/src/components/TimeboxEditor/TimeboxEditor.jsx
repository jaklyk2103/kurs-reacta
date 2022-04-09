import "./TimeboxEditor.css"
import { useState } from 'react'

export const TimeboxEditor = ({ isRunning, setRunning, setTitle, setTimeInMinutes, setEdited }) => {
  const [_title, _setTitle] = useState('')
  const [_time, _setTime] = useState(0)

  const handleOnChangeTitle = event => {
    _setTitle(event.target.value)
    console.log(`title value: ${_title}`)
  }

  const handleOnChangeTime = event => {
    _setTime(event.target.value)
    console.log(`time value: ${_time}`)
  }

  const handleButtonClick = event => {
    setTitle(_title)
    setTimeInMinutes(_time)
    setEdited(true)
  }

  return (
    <div className={`TimeboxEditor ${isRunning ? 'inactive' : ''}`}>
      <label>
        Co robisz?
        <input disabled={isRunning} type="text" value={_title} onChange={handleOnChangeTitle}></input>
        <br />
      </label>

      <label>
        Ile minut?
        <input disabled={isRunning} type="number" value={_time} onChange={handleOnChangeTime}></input>
        <br />
      </label>

      <button disabled={isRunning} onClick={handleButtonClick}>Zacznij</button>
    </div>
  )
}