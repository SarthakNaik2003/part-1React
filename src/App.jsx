const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  const Header = () => {
    return (
      <h1>{course.name}</h1>
    );
  };

  const Content = () => {
    return (
      <div>
        {course.parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  };

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };

  const Total = () => {
    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);
    return (
      <p>Number of exercises {totalExercises}</p>
    );
  };

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;