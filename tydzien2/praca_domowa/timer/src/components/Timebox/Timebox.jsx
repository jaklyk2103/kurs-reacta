import "./Timebox.css"
import { useState } from 'react'
import { Timer } from "../Timer/Timer"

export const Timebox = ({ isRunning, setRunning, timeInMinutes, title, edited }) => {
  const [isPaused, setPaused] = useState(!isRunning)
  const [timePassed, setTimePassed] = useState(0) // ms
  const [intervalId, setIntervalId] = useState(null)
  const [pausedCounter, setPausedCounter] = useState(0)

  const handleStartClick = event => {
    setPaused(false)
    startCountingTime()
  }

  const handleStopClick = event => {
    setPaused(true)
    setTimePassed(0)
    stopCountingTime()
  }

  const handlePausedClick = event => {
    setPaused(true)
    setPausedCounter(pausedCounter + 1)
    stopCountingTime()
  }

  const startCountingTime = () => {
    const intervalId = window.setInterval(() => {
      setTimePassed(timePassed => timePassed + 56)
    }, 56)
    setIntervalId(intervalId)
  }

  const stopCountingTime = () => {
    clearInterval(intervalId)
  }

  const timeInMs = timeInMinutes * 60 * 1000
  const percentValue = (timePassed / timeInMs) * 100
  const timeLeftInMilliseconds = timeInMs - timePassed
  const timeLeftInSeconds = Math.floor(timeLeftInMilliseconds / 1000)
  const minutesLeft = Math.floor(timeLeftInSeconds / 60)
  const secondsLeft = timeLeftInSeconds % 60
  const millisecondsLeft = timeLeftInMilliseconds % 1000
  console.log(`minutesLeft: ${minutesLeft}`)
  console.log(`secondsLeft: ${secondsLeft}`)

  return (
    <div className={`Timebox ${edited ? '' : 'inactive'}`}>
      <h1>{title}</h1>
      <Timer minutes={minutesLeft} seconds={secondsLeft} milliseconds={millisecondsLeft} />
      <div className="ProgressBar" style={{ '--width': `${percentValue}%` }} />
      <button disabled={!isPaused} onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <button disabled={isPaused} onClick={handlePausedClick}>Pause</button>
      Liczba przerw: {pausedCounter}
    </div>
  )
}