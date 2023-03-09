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

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course} />
      <Content courseParts={course} />
    </div>
  );
};

export default Course;
