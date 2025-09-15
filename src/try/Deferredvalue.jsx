import React, { useState, useDeferredValue } from "react";

function Deferredvalue() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const bigList = Array(20000)
    .fill(0)
    .map((_, i) => <div key={i}>{deferredInput}</div>);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
      />
      {bigList}
    </div>
  );
}

export default Deferredvalue;
