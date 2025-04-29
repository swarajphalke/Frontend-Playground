import React from "react";

export default function JsxFun() {
  const user = {
    firstName: "Raghav",
    lastName: "Patil",
  };
  function fullName(user) {
    return user.firstName + " " + user.lastName;
  }
  
  return <h1>Hello, {fullName(user)}</h1>;
}
