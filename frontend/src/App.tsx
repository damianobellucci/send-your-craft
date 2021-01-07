import React from "react";

import "./App.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function App() {
  return (
    <>
      <div className="App">
        <AudioPlayer
          autoPlay={false}
          src="http://localhost:2000?ciao=ciao"
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </>
  );
}

export default App;
