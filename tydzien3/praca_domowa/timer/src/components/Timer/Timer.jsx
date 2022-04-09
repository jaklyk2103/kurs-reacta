export const Timer = ({timer, onTimerDelete, onTimerChange}) => {
  const { name, time } = timer
  return (
    <div className="Timer">
      <h1>{name} - {time} min.</h1>
      <button onClick={() => onTimerDelete(timer)}>Usuń</button>
      <button onClick={() => onTimerChange({key: timer.key, name: 'xd', time: 123})}>Zmień</button>
    </div>
  )
}