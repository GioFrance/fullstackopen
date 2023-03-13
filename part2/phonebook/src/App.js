import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0949 938" },
  ]);
  const [newName, setNewName] = useState("...type a name");
  const [number, setNumber] = useState("");

  const addPhonebook = (event) => {
    event.preventDefault();
    const phonebookObject = {
      name: newName,
      number: number,
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
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} - {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
