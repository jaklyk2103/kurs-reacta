import Timer from '../Timer'

export const TimerList = ({timers, onTimerChange, onTimerDelete}) => {
  return (
    <div className="TimerList">
      {timers.map(timer => <Timer key={timer.key} timer={timer} onTimerChange={onTimerChange} onTimerDelete={onTimerDelete} />)}
    </div>
  )
}