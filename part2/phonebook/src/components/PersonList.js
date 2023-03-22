const PersonList = ({ personRef, deletePerson }) => {
  return (
    <li className="persons">
      {personRef.name} {personRef.number}
      <button onClick={() => deletePerson(personRef.id, personRef.name)}>
        delete
      </button>
    </li>
  );
};

export default PersonList;
