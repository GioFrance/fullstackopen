const PersonList = ({ personRef, deletePerson }) => {
  return (
    <p>
      {personRef.name} {personRef.number}
      <button onClick={() => deletePerson(personRef.id, personRef.name)}>
        {" "}
        delete{" "}
      </button>
    </p>
  );
};

export default PersonList;
