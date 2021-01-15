import React from "react";
import "./App.css";
import "react-h5-audio-player/lib/styles.css";
import FileInput from "./FileInput";

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
        {/*         <form
          action="http://localhost:5000/"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="filetoupload" accept="audio/*"></input>
          <input type="submit"></input>
        </form> */}
        <FileInput></FileInput>
      </div>
    </>
  );
}

export default App;
