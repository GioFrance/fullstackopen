import PersonList from "./PersonList";

const Persons = ({ persons, showFilter, deletePerson }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(showFilter.toLowerCase())
        )
        .map((person) => (
          <PersonList
            key={person.name}
            personRef={person}
            deletePerson={deletePerson}
          />
        ))}
    </div>
  );
};

export default Persons;
