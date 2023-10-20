import styles from "./Question.module.scss";
import classNames from "classnames/bind";
import { Fragment, useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Question({ listQuests }) {
  const [state, setState] = useState("");
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    localStorage.setItem("answer", JSON.stringify({}));
  }, []);

  const optionChange = (e, quest) => {
    console.log(e.target.value);
    setAnswer(() => {
      const newAnswers = { ...answer };
      newAnswers[quest] = e.target.value;
      localStorage.setItem("answer", JSON.stringify(newAnswers));
      return newAnswers;
    });
  };

  return (
    <div className={cx("list")}>
      {listQuests.map((item, indexQues) => {
        return (
          <div
            key={indexQues}
            id={`quest${indexQues+1}`}
            className={cx("questItem")}
          >
            <h1>
              {indexQues + 1}---{item.question}
            </h1>
            <br />
            {item.answers.map((answer, indexAn) => {
              return (
                <Fragment key={`answer_${indexQues}_${indexAn}`}>
                  <input
                    type="radio"
                    id={`answer_${indexQues}_${indexAn}`}
                    name={item.question}
                    value={answer}
                    onChange={(e) => optionChange(e, item.question)}
                  />
                  <label for={`answer_${indexQues}_${indexAn}`}>{answer}</label>
                  <br></br>
                </Fragment>
              );
            })}
          </div>
        );
      })}
      <br></br>
    </div>
  );
}

export default Question;
