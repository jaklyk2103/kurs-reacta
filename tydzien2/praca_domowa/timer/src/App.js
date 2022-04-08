import './App.css';
import Timebox from './components/Timebox'
import TimeboxEditor from './components/TimeboxEditor'
import { useState } from 'react'

function App() {
  const [isRunning, setRunning] = useState(false)
  
  return (
    <div className="App">
      <h1>Kurs Reacta Tydzień 2</h1>
      <hr></hr>
      <TimeboxEditor isRunning setRunning />
      <Timebox isRunning setRunning />
    </div>
  );
}

export default App;
