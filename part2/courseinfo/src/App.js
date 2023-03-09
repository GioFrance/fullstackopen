import Course from "./components/Course";

const H1Header = ({ mainHeader }) => <h1>{mainHeader}</h1>;

const App = ({ courses }) => {
  return (
    <div>
      <H1Header mainHeader="Web development curriculum" />
      {courses.map((course) => (
        <Course key={course.id} courses={course} />
      ))}
    </div>
  );
};

export default App;
