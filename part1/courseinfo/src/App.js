const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.courseName}</p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.courseParts} {props.courseExercise}
      </p>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises {props.courseTotal}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development!";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <h1>
        <Header courseName={course} />
      </h1>
      <Content courseParts={part1} courseExercise={exercises1} />
      <Content courseParts={part2} courseExercise={exercises2} />
      <Content courseParts={part3} courseExercise={exercises3} />

      <Total courseTotal={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
