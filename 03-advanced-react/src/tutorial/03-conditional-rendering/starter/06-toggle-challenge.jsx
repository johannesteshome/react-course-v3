import { useState } from "react";

const ToggleChallenge = () => {

const [toggle, setToggle] = useState(false)

  const setToggleOn = () => {
    setToggle((currentState) => {return !currentState})
  }

  return <div>
    {/* <button className="btn" onClick={setToggleOn}>{toggle ? "Close" : "Open"}</button>  OR */}
    { <button className="btn" onClick={() => setToggle(!toggle)}> {toggle ? "Close" : "Open"} </button> }
    {toggle && <ToggleComponent />}
  </div>;
};

const ToggleComponent = () => {
  return <div className="alert alert-danger">List Opened</div>
}

export default ToggleChallenge;
