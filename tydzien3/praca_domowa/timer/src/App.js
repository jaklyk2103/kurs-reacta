import "./App.css";
import TimerEditor from "./components/TimerEditor";
import TimerList from "./components/TimerList";
import { useState } from "react";

function App() {
  const [timers, setTimers] = useState([]);

  const handleTimerCreate = (newTimer) => {
    setTimers([ newTimer, ...timers ])
  }
  const handleTimerChange = (newTimer) => {
    const index = timers.findIndex(timer => timer.key === newTimer.key)
    timers[index] = {
      ...newTimer
    }
    setTimers([...timers])
  }
  const handleTimerDelete = (timerToDelete) => {
    setTimers(deleteTimer(timerToDelete))
  }
  const deleteTimer = (timerToDelete) => {
    return timers.filter(timer => timer.key !== timerToDelete.key)
  }

  return (
    <div className="App">
      <TimerEditor onTimerCreate={handleTimerCreate} />
      <TimerList timers={timers} onTimerChange={handleTimerChange} onTimerDelete={handleTimerDelete} />
    </div>
  );
}

export default App;
