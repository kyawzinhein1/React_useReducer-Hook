import { useState } from "react";

const App = () => {
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
      <h3>Your Key - {key}</h3>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>

      <span>{count}</span>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
