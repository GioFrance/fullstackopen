const PersonList = ({ personRef, deletePerson }) => {
  return (
    <p>
      {personRef.name} {personRef.number}
      <button onClick={() => deletePerson(personRef.id)}> delete</button>
    </p>
  );
};

export default PersonList;
