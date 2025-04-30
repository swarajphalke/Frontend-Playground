export default function JsxFunction1() {
  const user = {
    firstName: "Swaraj",
    lastName: "Phalke",
  };

  function fullName(user) {
    return user.firstName + " " + user.lastName;
  }

  function testUser(user) {
    if (user) {
      return <p>Hello, {fullName(user)}</p>;
    } else {
      return <p>Hello, Stranger...</p>;
    }
  }

  return(
  <>
    <h2>JSX Function1</h2>
    <p>{testUser()}</p>
  </>)
}
