import { useState } from "react";

export default function ControlForm() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(value);
  };

  return (
    <>
      <h2>Controlled Form by Functional Component</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Name : </label>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
