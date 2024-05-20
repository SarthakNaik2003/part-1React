const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = () => {
    return (
      <div>
        {parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )

  }


  const Total = () => {
    return (
      <p>Number of exercises {parts.exercises}</p>
    )
  }


  return (

    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App