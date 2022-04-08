import "./TimeboxEditor.css"

export const TimeboxEditor = () => {
  return (
    <div className="TimeboxEditor">
      <label>
        Co robisz?
        <input type="text" value="Uczę się skrótów klawiszowych"></input>
        <br />
      </label>

      <label>
        Ile minut?
        <input type="number" value="20"></input>
        <br />
      </label>

      <button>Zacznij</button>
    </div>
  )
}