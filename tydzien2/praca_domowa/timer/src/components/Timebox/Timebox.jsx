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
    setRunning(true)
    startCountingTime()
  }

  const handleStopClick = event => {
    setPaused(true)
    setRunning(false)
    setTimePassed(0)
    stopCountingTime()
  }

  const handlePauseResumeClick = event => {
    if (!isPaused) { 
      setPausedCounter(pausedCounter + 1)
      stopCountingTime()
    } else {
      startCountingTime()
    }
    setPaused(!isPaused)
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

  const timeInMilliseconds = timeInMinutes * 60 * 1000
  const percentValue = (timePassed / timeInMilliseconds) * 100
  const timeLeftInMilliseconds = timeInMilliseconds - timePassed
  const timeLeftInSeconds = Math.floor(timeLeftInMilliseconds / 1000)
  const hoursLeft = Math.floor(timeLeftInSeconds / 60 / 60)
  const minutesLeft = Math.floor(timeLeftInSeconds / 60) - (60 * hoursLeft)
  const secondsLeft = timeLeftInSeconds % 60
  const millisecondsLeft = timeLeftInMilliseconds % 1000
  console.log(`minutesLeft: ${minutesLeft}`)
  console.log(`secondsLeft: ${secondsLeft}`)

  return (
    <div className={`Timebox ${edited ? '' : 'inactive'}`}>
      <h1>{title}</h1>
      <Timer hours={hoursLeft > 0 ? hoursLeft : null} minutes={minutesLeft} seconds={secondsLeft} milliseconds={millisecondsLeft} />
      <div className="ProgressBar" style={{ '--width': `${percentValue}%`, '--percent': percentValue ? `${percentValue}%` : '' }} />
      <button disabled={!isPaused} onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handlePauseResumeClick}>{isPaused ? 'Resume' : 'Pause'}</button>
      Liczba przerw: {pausedCounter}
    </div>
  )
}