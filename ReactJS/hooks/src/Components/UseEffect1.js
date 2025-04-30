import { useState, useEffect } from "react";

export default function Effect2() {
  {
    const [cnt, setCnt] = useState(0);
    useEffect(() => {
      console.log("Updated 2...");
      setTimeout(() => {
        setCnt(cnt + 1);
      }, 1000);
    });

    return (
      <>
        <h2>useEffect()2</h2>
        <p>Count is : {cnt}</p>
      </>
    );
  }
}
