import React from "react";

import Error from "./Error";
import EditableTimebox from "./EditableTimebox";
import TimeboxList from "./TimeboxList";

function App() {
    return (
        <div className="App">
            <Error message='oj ależ błąd w naszej aplikacji!'>
                <TimeboxList />
                <EditableTimebox />
            </Error>
        </div>
    )
}

export default App