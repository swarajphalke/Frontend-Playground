import { useState } from "react";
export default function Hook1() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>States in React</h1>
    <hr />
    <h2>useState()</h2>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      &nbsp;
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      &nbsp;
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        Multiple
      </button>
      &nbsp;
    </>
  );
}
