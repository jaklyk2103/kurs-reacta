import './App.css';
import Timebox from './components/Timebox'
import TimeboxEditor from './components/TimeboxEditor'

function App() {
  return (
    <div className="App">
      <h1>Kurs Reacta Tydzień 2</h1>
      <hr></hr>
      <TimeboxEditor />
      <Timebox />
    </div>
  );
}

export default App;
