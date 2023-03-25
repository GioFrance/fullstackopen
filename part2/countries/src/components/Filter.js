const Filter = ({ filter, handleFilter }) => {
  return (
    <form>
      <div>
        name of country : <input value={filter} onChange={handleFilter} />
      </div>
    </form>
  );
};

export default Filter;
