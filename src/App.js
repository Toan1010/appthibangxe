import Header from "./component/Header";
import Question from "./component/Question";
import Result from "./component/Result";
import Timer from "./component/Timer";
import { useState } from "react";
import { getRandomQuests } from "./GetAndShuffle";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
import NaviQuest from "./component/NaviQuest";

const cx = classNames.bind(styles);

function App() {
  const [quiz, setQuiz] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [start, setStart] = useState(false);
  const [listQuestions, setListQuestions] = useState([]);
  const [status, setStatus] = useState("Start");

  const toggleQuiz = (mode) => {
    if (
      status === "End" &&
      !window.confirm("Are you sure you want to submit ?")
    ) {
      console.log(status);
      return; // Do nothing if the user clicks Cancel in the confirm dialog
    }

    setStart((prev) => !prev);
    setQuiz(mode);
    setStatus((prev) => {
      if (prev === "Start") {
        return "End";
      }
      let check = prev === "Again" ? "End" : "Again";
      return check;
    });
    console.log(quiz);
    if (!start) {
      setListQuestions(getRandomQuests(mode));
    }
  };

  return (
    <div className="App">
      <Header start={toggleQuiz} change={status} />
      <div className={cx("content")}>
        {start && <Question listQuests={listQuestions} />}
        {!start && <Result listQuests={listQuestions} score={setCorrect} />}
        <div>
          {start && <Timer initialTime={quiz} onTimeup={toggleQuiz} />}
          {!start && (
            <p>
              Point: {correct} / {quiz}
            </p>
          )}
          <NaviQuest numQuests={quiz}></NaviQuest>
        </div>
      </div>
    </div>
  );
}

export default App;
