const Header = ({ courseName }) => {
  return (
    <div>
      <h1>{courseName.name}</h1>
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
      <Part coursePartsFinal={courseParts.parts[0]} />
      <Part coursePartsFinal={courseParts.parts[1]} />
      <Part coursePartsFinal={courseParts.parts[2]} />
    </div>
  );
};

const Total = ({ courseTotal }) => {
  return (
    <div>
      <p>
        <b>Number of exercises </b>
        {courseTotal.parts[0].exercises +
          courseTotal.parts[1].exercises +
          courseTotal.parts[2].exercises}
      </p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course} />
      <Content courseParts={course} />
      <Total courseTotal={course} />
    </div>
  );
};

export default Course;
