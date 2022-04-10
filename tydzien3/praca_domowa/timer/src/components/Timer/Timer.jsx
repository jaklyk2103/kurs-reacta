import './Timer.css'
import { useState } from 'react'

export const Timer = ({timer, onTimerDelete, onTimerChange}) => {
  const { name, time } = timer
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState('')
  const [editedTime, setEditedTime] = useState(0)

  const handleChangeClick = () => {
    setIsEditing(!isEditing)
  }
  const handleChangeSubmitClick = () => {
    onTimerChange({key: timer.key, name: editedName, time: editedTime})
  }
  const handleEditedNameChange = event => {
    setEditedName(event.target.value)
  }
  const handleEditedTimeChange = event => {
    setEditedTime(event.target.value)
  }

  return (
    <div className="Timer">
      <h1>{name} - {time} min.</h1>
      <button onClick={() => onTimerDelete(timer)}>Usuń</button>
      <button onClick={handleChangeClick}>Zmień</button>
      <div class="TimerChangeEditor" hidden={!isEditing}>
        <label>
          Co robisz?
          <input type="text" value={editedName} onChange={handleEditedNameChange} />
        </label>
        <br />
        <label>
          Ile minut?
          <input type="number" value={editedTime} onChange={handleEditedTimeChange} />
        </label>
        <br />
        <button onClick={handleChangeSubmitClick}>Zatwierdź</button>
      </div>
    </div>
  )
}