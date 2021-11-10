import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import LoadedGame from "./LoadedGame";
import LoadingIcon from "./LoadingIcon";

const Main = () => {
  let history = useHistory();
  const [question, setQuestion] = useState(null);

  const formattedCorrectAnswers = useRef();
  const formattedIncorrectAnswers = useRef();
  const formattedQuestions = useRef();
  const copyFormattedQuestionsLength = useRef();
  const formattedEveryAnswer = useRef();

  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [d, setD] = useState(null);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(null);
  let [score, setScore] = useState(0);

  let [acceptingAnswers, setAcceptingAnswers] = useState(false);
  const CORRECT_POINTS = 10;
  const questionCounter = 1;

  const windowPath = window.location.pathname;

  const url = (id) =>
    `https://opentdb.com/api.php?amount=5&category=${id}&type=multiple&encode=base64`;

  const chooseSubject = (path) => {
    console.log(window.location);
    console.log(path);
    const pathName = "/trivia-time/game";

    if (path === `${pathName}/general`) {
      return url(9);
    } else if (path === `${pathName}/geography`) {
      return url(22);
    } else if (path === `${pathName}/history`) {
      return url(23);
    } else if (path === `${pathName}/sports`) {
      return url(21);
    } else if (path === `${pathName}/mythology`) {
      return url(20);
    } else if (path === `${pathName}/music`) {
      return url(12);
    } else if (path === `${pathName}/science`) {
      return url(17);
    } else if (path === `${pathName}/politics`) {
      return url(24);
    } else if (path === `${pathName}/animals`) {
      return url(27);
    } else if (path === `${pathName}/random`) {
      return url(0);
    }
  };

  useEffect(() => {
    fetch(chooseSubject(windowPath))
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong. Try a different category.");
        }
        return res.json();
      })
      .then((data) => {
        //function to decode base64 16bytes
        function decodeUnicode(str) {
          // Going backwards: from bytestream, to percent-encoding, to original string.
          return decodeURIComponent(
            atob(str)
              .split("")
              .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
        }

        //get data, separate by questions, correct and incorrect answers thru arrays

        //one array per category
        let loadedQuestion = [];
        let incorrectAnswers = [];
        let correctAnswers = [];
        let everyAnswer = [];

        //map thru the data and push each category to the right array while decoding everything
        data.results.map((result) => {
          loadedQuestion.push(decodeUnicode(result.question));
          incorrectAnswers.push(
            result["incorrect_answers"].map((item) => decodeUnicode(item))
          );
          correctAnswers.push(decodeUnicode(result["correct_answer"]));
          return [];
        });

        //hook useRef to use variables outside of the useEffect
        formattedCorrectAnswers.current = [...correctAnswers];
        formattedIncorrectAnswers.current = [...incorrectAnswers];
        formattedQuestions.current = [...loadedQuestion];
        copyFormattedQuestionsLength.current = loadedQuestion.length;

        //join all answers together for each question
        for (let i = 0; i <= formattedQuestions.current.length - 1; i++) {
          everyAnswer.push(
            formattedIncorrectAnswers.current[i].concat(
              formattedCorrectAnswers.current[i]
            )
          );
          formattedEveryAnswer.current = [...everyAnswer];
        }

        //done fetching
        setIsPending(false);
        //render any error
        setError(null);
        //function that will start the game is called up
        startGame();
      })
      .catch((error) => {
        console.error(error);
        setIsPending(false);
        setError(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chooseSubject(windowPath)]);

  //to start the game set score and question counter to 0, and call the function to get questions
  const startGame = () => {
    setCount(0);
    setScore(0);
    getNewQuestion();
  };

  //check if there are questions available, if so get it, update count, set total count
  //set new question, assign each possible answer randomly, delete the question/answers used
  //and allow user to answer. if no more questions are available, change to end page

  const getNewQuestion = () => {
    if (
      formattedQuestions.current.length === 0 ||
      questionCounter > formattedQuestions.current.length
    ) {
      localStorage.setItem("finalScore", score);
      return history.push("/end");
    }

    setCount(count + questionCounter);
    setTotalCount(copyFormattedQuestionsLength.current);
    setQuestion(formattedQuestions.current[0]);

    //function that randomly assigns answers to each option

    const func = (set, number) => {
      let answerIndex = Math.floor(Math.random() * number);
      set(formattedEveryAnswer.current[0][answerIndex]);
      formattedEveryAnswer.current[0].splice([answerIndex], 1);
      return set;
    };

    func(setA, 4);
    func(setB, 3);
    func(setC, 2);
    func(setD, 1);

    formattedEveryAnswer.current.shift();
    formattedQuestions.current.shift();

    setAcceptingAnswers(true);
  };

  //check if a question has been picked already. when answer is picked, save it to var and
  //check if matches the correct answer. give the right or wrong answer then call
  //func to get new question again.
  const showAnswer = (e) => {
    const clickedAnswer = e.target.textContent;
    const getElem = e.target.classList;
    if (!acceptingAnswers) return;

    setAcceptingAnswers(false);

    if (formattedCorrectAnswers.current[0] === clickedAnswer) {
      getElem.add("correct");
      setScore((score += CORRECT_POINTS));
    } else {
      getElem.add("incorrect");
    }
    formattedCorrectAnswers.current.shift();
    setTimeout(() => {
      getElem.remove("correct");
      getElem.remove("incorrect");
      getNewQuestion();
    }, 1100);
  };

  return (
    <div className="game">
      {error && <h2>{error}</h2>}
      {isPending && <LoadingIcon />}
      {question && (
        <LoadedGame
          currentQuestion={count}
          totalQuestion={totalCount}
          question={question}
          A={a}
          B={b}
          C={c}
          D={d}
          function={(e) => showAnswer(e)}
          score={score}
        />
      )}
    </div>
  );
};

export default Main;
