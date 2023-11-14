import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  let len = people.length;
  console.log(len);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = people.length + 1
    // const username = name
    if (!name) return;
    const obj = {
      id: Date.now(),
      name,
    };
    const newPeople = [...people, obj];
    // newPeople.push(obj);
    setPeople(newPeople);
    setName("");
    console.log(people);
  };

  const deleteUser = (delId) => {
    const newPeople = people.filter((item) => item.id !== delId);
    setPeople(newPeople);
  };

  return (
    <div>
      <form
        className='form'
        onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label
            htmlFor='name'
            className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button
          type='submit'
          className='btn btn-block'>
          submit
        </button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <button
              className='btn'
              onClick={() => {
                deleteUser(person.id);
              }}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
