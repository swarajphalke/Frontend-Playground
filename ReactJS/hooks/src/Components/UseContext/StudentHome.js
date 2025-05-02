import { useContext } from "react";
import StudentRef from "./StudentRef";

export default function StudentHome() {
  const studData = useContext(StudentRef);

  return (
    <>
      <h2>useContext()2</h2>
      <p>Subject : {studData.name1}</p>
      <p>Duration : {studData.data}</p>
      <hr />
      <hr />
    </>
  );
}
