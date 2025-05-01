import { useState, useEffect } from "react";

export default function DateEx() {
  const [date, setDate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const updateDate = new Date();
      setDate(updateDate.toLocaleString());
    }, 1000);
  }, []);

  return (
    <>
      <h2>UseEffect()3</h2>
      <p>Date : {date} </p>
      <hr />
      <hr />
    </>
  );
}
