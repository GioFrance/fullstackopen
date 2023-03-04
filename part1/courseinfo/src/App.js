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
        {props.coursePartsFinal[0].name} {props.coursePartsFinal[0].exercises}
      </p>
      <p>
        {props.coursePartsFinal[1].name} {props.coursePartsFinal[1].exercises}
      </p>
      <p>
        {props.coursePartsFinal[2].name} {props.coursePartsFinal[2].exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part coursePartsFinal={props.courseParts} />

      {/* OR */}

      {/* <p>
        {props.courseParts[0].name} {props.courseParts[0].exercises}
      </p>
      <p>
        {props.courseParts[1].name} {props.courseParts[1].exercises}
      </p>
      <p>
        {props.courseParts[2].name} {props.courseParts[2].exercises}
      </p> */}
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.courseTotal[0].exercises +
          props.courseTotal[1].exercises +
          props.courseTotal[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development!";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header courseName={course} />

      <Content courseParts={parts} />

      <Total courseTotal={parts} />
    </div>
  );
};

export default App;
