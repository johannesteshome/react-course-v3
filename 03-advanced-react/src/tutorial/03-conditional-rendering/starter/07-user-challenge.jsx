import { useState } from "react";


const UserChallenge = () => {

  const [user, setUser] = useState(null)

  const authenticate = () => {
    if (user) {
      setUser(null)
    }
    else{
      setUser({name: "John Robi", type: "User"})
    }
  }

  return <div>
    <h2>User Challenge</h2>
    <button className="btn" onClick={authenticate}>{user ? "log out" : "log in"}</button>
    {user ? <UserInformation user = {user}  /> : <h2>Please Login</h2>}
  </div>;
};

const UserInformation = ({user}) => {
  return <div>
    <h2>{user.name}</h2>
    <h3>{user.type}</h3>
  </div>
}

export default UserChallenge;
