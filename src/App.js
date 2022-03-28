import { useState } from "react";
import "./App.css";

function App() {
  const [isStart, setStart] = useState(false); // state for changing after start-btn click

  // const [quiz, setQuiz] = useState([]); // fetch data from trivia_api and set them to quiz
  // const [score, setScore] = useState([]); // score state for result

  // ------- functions -------

  const handleClick = () => {
    setStart((prevVal) => !prevVal);
  };

  // -------  for component -------

  const welcomePage = (
    <section className="welcome">
      <h1 className="title">Quizzical</h1>
      <span className="description">
        A web app for your brain made with REACT JS + Trivia API
      </span>
      <button className="btn-start" onClick={handleClick}>
        Start Quiz
      </button>
    </section>
  );

  const quizComponent = "";

  return <main>{!isStart ? welcomePage : quizComponent}</main>;
}

export default App;
