const Header = ({ courseName }) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  );
};

const Part = ({ coursePartsFinal }) => {
  return (
    <div>
      <p>
        {coursePartsFinal.name} {coursePartsFinal.exercises}
      </p>
    </div>
  );
};

const Content = ({ courseParts }) => {
  return (
    <div>
      <Part coursePartsFinal={courseParts[0]} />
      <Part coursePartsFinal={courseParts[1]} />
      <Part coursePartsFinal={courseParts[2]} />
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

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseTotal={course.parts} />
    </div>
  );
};

export default Course;
