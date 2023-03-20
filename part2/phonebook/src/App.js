import { useState, useEffect } from "react";
import H1Header from "./components/H1Header";
import H2Header from "./components/H2Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookServices from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("...type a name");
  const [number, setNumber] = useState("");
  const [showFilter, setShowFilter] = useState("");
  const titleMain = "Phonebook";

  useEffect(() => {
    phonebookServices.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPhonebook = (event) => {
    event.preventDefault();
    const phonebookObject = {
      name: newName,
      number: number,
    };

    phonebookServices
      .create(phonebookObject)
      .then(
        persons.find((person) =>
          person.name === phonebookObject.name
            ? alert(`${newName} is already added to phonebook`)
            : setPersons(persons.concat(phonebookObject))
        )
      );

    setNewName("");
    setNumber("");
  };

  const deletePhonebook = (id) => {
    const person = persons.find((n) => n.id === id);
    if (window.confirm(`Delete ${person.name}`)) {
      phonebookServices.remove(id).then((returnedPerson) => {
        persons.map((person) => (person.id !== id ? person : returnedPerson));
      });
      setPersons(persons.filter((person) => person.id !== id));
    }
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
      <Persons
        persons={persons}
        showFilter={showFilter}
        deletePerson={deletePhonebook}
      />
    </div>
  );
};

export default App;
