import React from "react";
import "./App.css";
import "react-h5-audio-player/lib/styles.css";

function App() {
  return (
    <>
      <div className="App">
        <audio controls preload="metadata">
          <source
            src="http://localhost:2000?idFile=sound2"
            type="audio/mpeg"
          ></source>
        </audio>
      </div>
    </>
  );
}

export default App;
