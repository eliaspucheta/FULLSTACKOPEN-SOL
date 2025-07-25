import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        content={[part1, part2, part3, exercises1, exercises2, exercises3]}
      />
      <Total count={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
