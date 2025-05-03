import { useState, useMemo } from "react";
export default function MemoHook() {
  const [number, setNumber] = useState(1);
  const fact = (n) => {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
      ans = ans * i;
    }
    return ans;
  };

  const res = useMemo(()=>fact(number),[number])

  return(
    <>
        <h2>useMemo()</h2>
        <p>Factorial of {number} is {res} </p>
        <input type="text" value={number} onChange={()=>setNumber(number+1)} />
    </>
  )
}
