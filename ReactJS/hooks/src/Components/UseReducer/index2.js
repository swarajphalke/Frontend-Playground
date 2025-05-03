import { useReducer } from "react";

const initialState = 1;

const reducer = (state, dispatch) => {
  switch (dispatch) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>useReducer()2</h2>
      <p>count is : {count}</p>
      <button onClick={() => dispatch("Increment")}>Increment</button> &nbsp;
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <hr />
      <hr />
    </>
  );
}
