const PersonForm = ({
  addPhonebook,
  newName,
  handlePhonebookChange,
  number,
  handleNumberChange,
}) => {
  return (
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
  );
};

export default PersonForm;
