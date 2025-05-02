import { useState } from "react";
import studentRef from "./studentRef";

export default function StudentData(props) {
  const name1 = "ReactJS";
  const [data, setData] = useState("1-Week");

  return (
    <studentRef.Provider value={{ name1, data }}>
      {props.children}
    </studentRef.Provider>
  );
}
