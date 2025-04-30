import { useState } from "react";

export default function Hook1() {
  const [count, setCount] = useState(0);
  return (
    <>
      <hr />
      <h1 className="text-primary">
        <u>States in React</u>
      </h1>
      <hr />

      <h2>useState()</h2>
      <p>Count is : {count}</p>
      <button className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button> &nbsp;
      <button className="btn btn-danger" onClick={()=>{
        setCount(count-1)
      }}>Decrement</button> &nbsp;
      <button className="btn btn-secondary" onClick={()=>{
        setCount(count+2)
      }}>Double</button>
      <br /><br /><br /><br />
    </>
  );
}
