import { useContext } from "react";
import { BioContext } from "./UseContext";

export const Home = () => {
  const { myName, myAge } = useContext(BioContext);
  return (
    <>
      <h2>UseContext()1</h2>
      <p>
        Hello Context API. My name is {myName}. I am {myAge} years old.{" "}
      </p>
    </>
  );
};
