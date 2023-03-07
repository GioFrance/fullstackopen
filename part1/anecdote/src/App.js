import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [totalVote, setTotalVote] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const handleClickVote = () => {
    const copy = [...totalVote];
    copy[selected] += 1;
    setTotalVote(copy);
    console.log(copy);
  };

  const handleClickNext = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    console.log(randomAnecdote);
    setSelected(randomAnecdote);
  };

  // const handleClickNext = () =>
  //   setSelected(Math.floor(Math.random() * anecdotes.length));

  const mostVote = Math.max(...totalVote);
  const index = totalVote.indexOf(mostVote);
  const winner = anecdotes[index];

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {totalVote[selected]} votes</p>
      <div>
        <button onClick={handleClickVote}>vote</button>
        <button onClick={handleClickNext}>next anecdote</button>
      </div>
      <Header text="Anecdote with the most votes" />
      <p>{winner}</p>
      <p>has {mostVote} votes</p>
    </div>
  );
};

export default App;
