const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.courseParts} {props.courseExercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part
        courseParts={props.courseParts1}
        courseExercise={props.courseExercise1}
      />
      <Part
        courseParts={props.courseParts2}
        courseExercise={props.courseExercise2}
      />
      <Part
        courseParts={props.courseParts3}
        courseExercise={props.courseExercise3}
      />
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
      <Header courseName={course} />

      <Content
        courseParts1={part1}
        courseExercise1={exercises1}
        courseParts2={part2}
        courseExercise2={exercises2}
        courseParts3={part3}
        courseExercise3={exercises3}
      />

      <Total courseTotal={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
