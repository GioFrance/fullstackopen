const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.courseName.name}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.coursePartsFinal.parts[0].name}{" "}
        {props.coursePartsFinal.parts[0].exercises}
      </p>
      <p>
        {props.coursePartsFinal.parts[1].name}{" "}
        {props.coursePartsFinal.parts[1].exercises}
      </p>
      <p>
        {props.coursePartsFinal.parts[2].name}{" "}
        {props.coursePartsFinal.parts[2].exercises}
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
        {props.courseParts.parts[0].name} {props.courseParts.parts[0].exercises}
      </p>
      <p>
        {props.courseParts.parts[1].name} {props.courseParts.parts[1].exercises}
      </p>
      <p>
        {props.courseParts.parts[2].name} {props.courseParts.parts[2].exercises}
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
        {props.courseTotal.parts[0].exercises +
          props.courseTotal.parts[1].exercises +
          props.courseTotal.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development!",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header courseName={course} />

      <Content courseParts={course} />

      <Total courseTotal={course} />
    </div>
  );
};

export default App;
