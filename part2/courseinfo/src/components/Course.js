const H2Header = (props) => {
  return <h2>{props.courseName}</h2>;
};

const Part = ({ coursePartName, coursePartExercises }) => {
  return (
    <div>
      <p>
        {coursePartName} : {coursePartExercises}
      </p>
    </div>
  );
};
//OR to remove spaces
// const Part = ({ coursePartName, coursePartExercises }) => (
//   <div>
//     {coursePartName}: {coursePartExercises}
//   </div>
// );

const Content = ({ courseParts }) => {
  console.log({ courseParts });
  return (
    <div>
      {courseParts.map((parts) => (
        <Part
          key={parts.id}
          coursePartName={parts.name}
          coursePartExercises={parts.exercises}
        />
      ))}
    </div>
  );
};

const Total = ({ courseTotal }) => {
  const total = courseTotal.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  console.log({ total });
  return (
    <div>
      <p>
        <b>Number of exercises = {total} </b>
      </p>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <H2Header courseName={courses.name} />
      <Content courseParts={courses.parts} />
      <Total courseTotal={courses.parts} />
    </div>
  );
};

export default Course;
