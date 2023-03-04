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
  const part1 = { name: "Fundamentals of React", exercises: 10 };
  const part2 = { name: "Using props to pass data", exercises: 7 };
  const part3 = { name: "State of a component", exercises: 14 };

  return (
    <div>
      <Header courseName={course} />

      <Content
        coursePartsA={part1.name}
        courseExerciseA={part1.exercises}
        coursePartsB={part2.name}
        courseExerciseB={part2.exercises}
        coursePartsC={part3.name}
        courseExerciseC={part3.exercises}
      />

      <Total
        courseTotal={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
