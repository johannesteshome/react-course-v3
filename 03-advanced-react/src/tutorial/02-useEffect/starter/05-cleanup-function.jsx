import { useEffect } from "react";
import { useState } from "react";



const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log("render");

  return <div>
    <button className="btn" onClick={() => setToggle(!toggle)}>Toggle Component</button>
    {toggle && <RandomComponent />}
  </div>
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      //some logic
      console.log("scrolling");
    }
    window.addEventListener('scroll', someFunc)
    return () =>  window.removeEventListener('scroll', someFunc)
  }, [])
  return <h1>Hello There</h1>
}

export default CleanupFunction;
