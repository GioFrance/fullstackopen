import { useState, useEffect } from "react";
import H1Header from "./components/H1Header";
import H2Header from "./components/H2Header";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookServices from "./services/phonebook";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="error">{message}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [showFilter, setShowFilter] = useState("");
  const [message, setMessage] = useState("some message here");
  const titleMain = "Phonebook";

  useEffect(() => {
    phonebookServices.getAll().then((initialPersons) => {
      console.log(initialPersons);
      setPersons(initialPersons);
    });
  }, []);

  const addPhonebook = (event) => {
    event.preventDefault();
    const phonebookObject = {
      name: newName,
      number: number,
    };

    const currentPerson = persons.find(
      (person) =>
        person.name.toLowerCase() === phonebookObject.name.toLowerCase()
    );

    if (currentPerson && currentPerson.number === number) {
      alert(`${newName} is already added to phonebook`);
    }

    if (currentPerson && currentPerson.number !== number) {
      const confirmReplace = window.confirm(
        `Replace ${currentPerson.name} number with new number?`
      );

      if (confirmReplace) {
        const personUpdate = { ...currentPerson, number: number };
        phonebookServices
          .update(currentPerson.id, personUpdate)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== currentPerson.id ? person : returnedPerson
              )
            );
          });

        setMessage(`'${currentPerson.name}' number has been updated`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    }
    if (!currentPerson) {
      phonebookServices.create(phonebookObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      setMessage(`'${phonebookObject.name}' has been added to contacts`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }

    setNewName("");
    setNumber("");
  };

  const deletePhonebook = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      phonebookServices.remove(id).then((returnedPerson) => {
        persons.map((person) => (person.id !== id ? person : returnedPerson));
      });
      setPersons(persons.filter((person) => person.id !== id));
      setMessage(`'${name}' has been deleted`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
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
      <Notification message={message} />
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
