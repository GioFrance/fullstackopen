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
        {props.courseParts} {props.courseExercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part
        courseParts={props.coursePartsA}
        courseExercises={props.courseExerciseA}
      />
      <Part
        courseParts={props.coursePartsB}
        courseExercises={props.courseExerciseB}
      />
      <Part
        courseParts={props.coursePartsC}
        courseExercises={props.courseExerciseC}
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
        coursePartsA={part1}
        courseExerciseA={exercises1}
        coursePartsB={part2}
        courseExerciseB={exercises2}
        coursePartsC={part3}
        courseExerciseC={exercises3}
      />

      <Total courseTotal={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
