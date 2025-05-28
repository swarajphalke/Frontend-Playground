import { useReducer } from "react";

export const ReducerComp = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
      
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>useReducer()1</h2>
      <div>
        <p>count is : {count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button> &nbsp;
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};
