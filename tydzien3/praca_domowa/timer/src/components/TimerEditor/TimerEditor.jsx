import './TimerEditor.css'
// import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TimerEditor = ({ onTimerCreate }) => {
  // const formRef = useRef()
  // do we need to create this ref? We can get currentTarget from the event object

  const handleAddClick = (event) => {
    event.preventDefault()
    const currentTarget = event.currentTarget
    onTimerCreate({
      key: uuidv4(),
      name: currentTarget[0].value,
      time: currentTarget[1].value
    })
  }

  return (
    // <form ref={formRef} onSubmit={handleAddClick} className="TimerEditor">
    <form onSubmit={handleAddClick} className="TimerEditor">
      <label>
        Co robisz?
        <input type="text" />
        <br />
      </label>
      <label>
        Ile minut?
        <input type="number" />
        <br />
      </label>
      <button>Dodaj</button>
    </form>
  )
}