import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TimerEditor = ({ onTimerCreate }) => {
  const [timerName, setTimerName] = useState('')
  const [timerTime, setTimerTime] = useState(0)

  const handleTimerNameChange = event => {
    setTimerName(event.target.value)
  }
  const handleTimerTimeChange = event => {
    setTimerTime(event.target.value)
  }
  const handleAddClick = (event) => {
    event.preventDefault()
    onTimerCreate({
      key: uuidv4(),
      name: timerName,
      time: timerTime
    })
  }

  return (
    <form className="TimerEditor">
      <label>
        Co robisz?
        <input type="text" value={timerName} onChange={handleTimerNameChange} />
        <br />
      </label>
      <label>
        Ile minut?
        <input type="number" value={timerTime} onChange={handleTimerTimeChange} />
        <br />
      </label>
      <button onClick={handleAddClick}>Dodaj</button>
    </form>
  )
}