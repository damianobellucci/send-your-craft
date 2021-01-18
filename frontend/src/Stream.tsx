import React from "react";

export default function Stream() {
  return (
    <audio controls preload="metadata">
      <source
        src="http://localhost:2000?idFile=sound2"
        type="audio/mpeg"
      ></source>
    </audio>
  );
}
