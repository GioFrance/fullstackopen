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
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header courseName={props.course} />
      <Content courseParts={props.course} />
    </div>
  );
};

export default Course;
