import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error("Error status code " + response.status)
      }
      const data = await response.json()
      setUser(data)
      // console.log(user);
    }
    catch (error){
      setIsError(true)
      console.log(error);
    } 
    setIsLoading(false)
  }

  useEffect(
    () => {
      fetchUser()
    }, []
  )

  if (isLoading){
    return <h2>Loading...</h2>
  }
  if (isError){
    return <h2>There is an Error</h2>
  }

  return <div>
    <img src={user.avatar_url} alt={user.name} style = {{width: "150px", borderRadius:"25px"}} />
  <h2> {user.name} </h2>;
  <h4>Works at {user.company}</h4>
  <p>{user.bio}</p>
  </div>
};
export default MultipleReturnsFetchData;
