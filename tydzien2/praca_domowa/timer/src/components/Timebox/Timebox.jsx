import "./Timebox.css"

export const Timebox = () => {
  return (
    <div className="Timebox">
      <h1>Uczę się skrótów klawiszowych</h1>
      <h2>Pozostało 19:00</h2>
      <div className="ProgressBar" />
      <button>Start</button>
      <button>Stop</button>
      <button>Pause</button>
      Liczba przerw: 2
    </div>
  )
}