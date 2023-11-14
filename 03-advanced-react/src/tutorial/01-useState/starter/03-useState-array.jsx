import { useState } from "react";
import { data } from "../../../data"

const UseStateArray = () => {

  const [people, setPeople] = useState(data)

  const removeSingle = (id) => {
    let newPeople = people.filter((person) => person.id !== id )
    console.log(newPeople);
    setPeople(newPeople)
  }

  const removeAll = () => {
    setPeople([])
  }
  
   return <div>
    {
      people.map((person) => {
        const {id, name} = person
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button className="btn" onClick={() => removeSingle(id)}>Remove</button> 
          </div>
        )
      })
    }
    <button onClick={removeAll} style={{marginTop: '2rem'}} className="btn">Remove All</button> 
    </div>;

};

export default UseStateArray;
