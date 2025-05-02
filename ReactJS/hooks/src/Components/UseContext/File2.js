import UserContext from "./File1";
import File3 from "./File3";

function File2() {
  const user = {
    name: "Swaraj",
    age: 22,
  };

  return (
    <UserContext.Provider value={user}>
      <h2>UseState()3</h2>
      <File3 />
    </UserContext.Provider>
  );
}

export default File2;
