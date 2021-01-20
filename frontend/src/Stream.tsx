import React from "react";

export default function Stream() {
  return (
    <audio controls preload="metadata">
      <source
        src="http://localhost:5000/stream/?idFile=sound"
        type="audio/mpeg"
      ></source>
    </audio>
  );
}
