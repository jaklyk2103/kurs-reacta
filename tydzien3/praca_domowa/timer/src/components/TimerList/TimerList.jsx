import './TimerList.css'
import Timer from '../Timer'

export const TimerList = ({timers, onTimerChange, onTimerDelete}) => {
  return (
    <div className="TimerList" hidden={timers.length === 0}>
      {timers.map(timer => <Timer key={timer.key} timer={timer} onTimerChange={onTimerChange} onTimerDelete={onTimerDelete} />)}
    </div>
  )
}