import "./App.css";
import Timebox from "./components/Timebox";
import TimeboxEditor from "./components/TimeboxEditor";
import { useState } from "react";

function App() {
  const [isRunning, setRunning] = useState(false);
  const [timeInMinutes, setTimeInMinutes] = useState(0);
  const [title, setTitle] = useState("");
  const [edited, setEdited] = useState(false);

  return (
    <div className="App">
      <h1>Kurs Reacta Tydzień 2</h1>
      <hr></hr>
      <TimeboxEditor
        isRunning={isRunning}
        setRunning={setRunning}
        setTimeInMinutes={setTimeInMinutes}
        setTitle={setTitle}
        setEdited={setEdited}
      />
      <Timebox
        isRunning={isRunning}
        setRunning={setRunning}
        timeInMinutes={timeInMinutes}
        title={title}
        edited={edited}
      />
    </div>
  );
}

export default App;
