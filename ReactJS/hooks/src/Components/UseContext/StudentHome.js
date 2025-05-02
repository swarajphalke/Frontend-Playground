import { useContext } from "react";
import studentRef from "./studentRef";

export default function StudentHome() {
  const studData = useContext(studentRef);

  return (
    <>
      <h2>useContext()2</h2>
      <p>Subject : {studData.name1}</p>
      <p>Duration : {studData.data}</p>
    </>
  );
}
