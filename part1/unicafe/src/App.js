import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    const updateGood = good + 1;
    setGood(updateGood);
  };

  const handleClickNeutral = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
  };

  const handleClickBad = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}> good </button>
      <button onClick={handleClickNeutral}> neutral </button>
      <button onClick={handleClickBad}> bad </button>
      <h1>statistics</h1>
      <div>
        <p>good : {good}</p>
        <p>neutral : {neutral}</p>
        <p>bad : {bad}</p>
      </div>
    </div>
  );
};

export default App;
