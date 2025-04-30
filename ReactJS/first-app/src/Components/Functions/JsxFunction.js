export default function JsxFunction() {
  const user = {
    firstName: "Raghav",
    lastName: "Patil",
  };

  function fullName(user) {
    return user.firstName + " " + user.lastName;
  }

  return <>
    <h2>JSX Function</h2>
    <p>Hello, {fullName(user)}</p>
  </>;
}
