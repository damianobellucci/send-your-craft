import * as React from "react";
//style
import "./App.css";
//components
import FileInput from "./FileInput";
import Stream from "./Stream";

function App() {
  const myRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="App">
        <Stream></Stream>
        <FileInput></FileInput>
        <input type="text" ref={myRef} />
      </div>
    </>
  );
}

export default App;
