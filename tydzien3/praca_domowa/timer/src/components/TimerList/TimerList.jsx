export const TimerList = ({timers, onTimerChange, onTimerDelete}) => {

  return(
    <div className="TimerList">
      {timers.map(timer => {
        return <div key={timer.key}>
          <h1>{timer.name} - {timer.time} min.</h1>
          <button onClick={() => onTimerDelete(timer)}>Usuń</button>
          <button onClick={() => onTimerChange({key: timer.key, name: 'xd', time: 123})}>Zmień</button>
        </div>
      })}
    </div>
  )

}