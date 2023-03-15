import { useState, useEffect } from "react";
import axios from "axios";
import H1Header from "./components/H1Header";
import H2Header from "./components/H2Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("...type a name");
  const [number, setNumber] = useState("");
  const [showFilter, setShowFilter] = useState("");
  const titleMain = "Phonebook";

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

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
