import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("...type a name");
  const [number, setNumber] = useState("");
  const [showFilter, setShowFilter] = useState("");

  const addPhonebook = (event) => {
    event.preventDefault();
    const phonebookObject = {
      name: newName,
      number: number,
      id: persons.length + 1,
    };

    const nameFinder = persons.find(
      (person) => person.name === phonebookObject.name
    );

    if (nameFinder) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(phonebookObject));
    }
    setNewName("");
    setNumber("");
  };

  const handleFilterChange = (event) => {
    setShowFilter(event.target.value);
  };

  const handlePhonebookChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with:
        <input value={showFilter} onChange={handleFilterChange} />
      </div>

      <h2>Add New Contact</h2>
      <form onSubmit={addPhonebook}>
        <div>
          name:
          <input value={newName} onChange={handlePhonebookChange} />
        </div>
        <div>
          number:
          <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(showFilter.toLowerCase())
        )
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

// filter === ''  ? persons : persons.filter(person =>
//   person.name.toLowerCase().includes(filter.toLowerCase()))

export default App;
