import { Person } from "./Person";
import { people } from "../../../data";

const List = () => {
  console.log(people);

  return (
    <div>
      {people.map((person) => {
        return (
          <Person
            key={person.name}
            {...person}
          />
        );
      })}
    </div>
  );
};
export default List;
