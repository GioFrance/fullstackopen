import { useState } from "react";
import H1Header from "./components/H1Header";
import H2Header from "./components/H2Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
  const titleMain = "Phonebook";

  const addPhonebook = (event) => {
    event.preventDefault();
    const phonebookObject = {
      name: newName,
      number: number,
      id: persons.length + 1,
    };

    persons.find((person) =>
      person.name === phonebookObject.name
        ? alert(`${newName} is already added to phonebook`)
        : setPersons(persons.concat(phonebookObject))
    );
    //  OR
    // if (nameFinder) {
    //   alert(`${newName} is already added to phonebook`);
    // } else {
    //   setPersons(persons.concat(phonebookObject));
    // }
    setNewName("");
    setNumber("");
  };

  const handleFilterChange = (event) => {
    setShowFilter(event.target.value);
  };
  const handlePhonebookChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <H1Header header1={titleMain} />
      <Filter filter={showFilter} handleChange={handleFilterChange} />

      <H2Header text="Add New Contact" />
      <PersonForm
        addPhonebook={addPhonebook}
        newName={newName}
        handlePhonebookChange={handlePhonebookChange}
        number={number}
        handleNumberChange={handleNumberChange}
      />

      <H2Header text="Numbers" />
      <Persons persons={persons} showFilter={showFilter} />
    </div>
  );
};

export default App;
