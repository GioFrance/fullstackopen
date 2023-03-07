import { useState } from "react";

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>total: {props.total}</p>
      <p>average: {props.average}</p>
      <p>percentage: {props.percentage}</p>
    </div>
  );
};

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

  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const percentage = (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}> good </button>
      <button onClick={handleClickNeutral}> neutral </button>
      <button onClick={handleClickBad}> bad </button>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percentage={percentage}
      />
    </div>
  );
};

export default App;
