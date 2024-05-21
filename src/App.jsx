import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14
  //     }
  //   ]
  // };

  // const Header = () => {
  //   return (
  //     <h1>{course.name}</h1>
  //   );
  // };

  // const Content = () => {
  //   return (
  //     <div>
  //       {course.parts.map((part, index) => (
  //         <Part key={index} name={part.name} exercises={part.exercises} />
  //       ))}
  //     </div>
  //   );
  // };

  // const Part = (props) => {
  //   return (
  //     <p>
  //       {props.name} {props.exercises}
  //     </p>
  //   );
  // };

  // const Total = () => {
  //   const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);
  //   return (
  //     <p>Number of exercises {totalExercises}</p>
  //   );
  // };

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClick, setAll] = useState([])
  const [total, setTotal] = useState(0, 1)

  const handleLeftClick = () => {
    setAll(allClick.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClick.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClick.join(" ")}</p>

      <h2>{total}</h2>


      {/* <Header />
      <Content />
      <Total /> */}
    </div>
  );
};

export default App;