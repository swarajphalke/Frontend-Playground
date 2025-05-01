import { useRef } from "react";

export default function UseRef1() {
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
    <h2>useRef()2</h2>
      <form onSubmit={handleSubmitForm}>
        <label>Username : </label>
        <input type="text" ref={username} /> <br />
        <label>Password : </label>
        <input type="text" ref={password} /> <br/>
        <button>Submit</button>
        <hr />
        <hr />
      </form>
    </>
  );
}
