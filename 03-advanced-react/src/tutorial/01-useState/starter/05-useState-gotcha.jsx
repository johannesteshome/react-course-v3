import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const clickCount = () => {
    setCount((currentState) => {
      return currentState + 1;
      console.log(currentState);
    })
    console.log(count);
  };
  return <>
    <h1>{count}</h1>
    <button className="btn" onClick={clickCount}>Click Me</button>
  </>;
};

export default UseStateGotcha;
