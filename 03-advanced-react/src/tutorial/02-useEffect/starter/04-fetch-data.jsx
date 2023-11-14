// Finished
import { useEffect, useState } from "react";
const url = 'https://api.github.com/users';

const FetchData = () => {
 
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUserData = async () =>  {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status)
        }
        const jsonData = await response.json()
        setUsers(jsonData)
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchUserData()
  }, [])
  
  return <>
  {
    users.map((user) => {
      return (
       
      <div key={user.id} className="users">
        <img src={user.avatar_url} alt="Avatar"  />
        <div >
          <h2>{user.login}</h2>
          <h3>{user.type}</h3>
        </div>
      </div>
      )
    })
  }
    
  </>;
};
export default FetchData;
