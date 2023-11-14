import { useState } from "react";

const UseStateBasics = () => {
  
  const [count, setCount] = useState(0)

  const handleCounter = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>You have clicked {count} times</h1>
      <button className="btn" onClick={handleCounter}>Click Me</button>
    </div>
  );
};

export default UseStateBasics;
