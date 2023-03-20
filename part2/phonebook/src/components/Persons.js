const PersonList = ({ personRef }) => {
  return (
    <p>
      {personRef.name} {personRef.number}
    </p>
  );
};

const Persons = ({ persons, showFilter }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(showFilter.toLowerCase())
        )
        .map((person) => (
          <PersonList key={person.name} personRef={person} />
        ))}
    </div>
  );
};

export default Persons;
