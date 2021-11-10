import React, { useEffect, useState, useRef } from "react";
import LoadedGame from "./LoadedGame";
import LoadingIcon from "./LoadingIcon";

const Game = (props) => {
  const [question, setQuestion] = useState(null);

  const formattedAnswers = useRef();

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
  const url =
    "https://opentdb.com/api.php?amount=2&category=23&type=multiple&encode=base64"; //&encode=base64

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong. Try a different category.");
        }
        return res.json();
      })
      .then((data) => {
        let questionCounter = 0;
        let questionIndex = 0;

        const windowLoc = window.location.host;

        //get data, separate by questions, correct and incorrect answers thru arrays

        // const loadedQuestion = data.results.map((result) => result.question);
        let loadedQuestion = [];
        const incorrectAnswers = [];
        const correctAnswer = [];

        //const copyIncorrectAnswers = [...incorrectAnswers];
        let everyAnswer = [];

        data.results.map((result) => {
          loadedQuestion.push(atob(result.question));
          incorrectAnswers.push(
            result["incorrect_answers"].map((item) => atob(item))
          );
          correctAnswer.push(atob(result["correct_answer"]));
          return [];
        });

        formattedAnswers.current = [...correctAnswer];
        //save in local storage the current correct answer (FIX HARD CODED ARRAY)
        localStorage.setItem("currentCorrectAnswer", correctAnswer[0]);

        //data.results.map((result) => loadedQuestion.push(result.question));

        //get correct answer
        /* const correctAnswer = data.results.map(
          (result) => result["correct_answer"]
        );
        localStorage.setItem(
          "recentCorrectAnswer",
          correctAnswer.toString() //missing atob()
        ); */

        //get incorrect answers
        /* let incorrectAnswers;
        data.results.map((result) => {
          return (incorrectAnswers = result["incorrect_answers"]);
        }); */

        /* const incorrectAnswers = data.results.map((result) => {
          console.log(result["incorrect_answers"]);
        }); */

        /* data.results.map((result) => {
          incorrectAnswers.push(result["incorrect_answers"]);
        }); */

        /* start game here: set score to 0, number of questions begins at 0, 
        next array of questions/answers, get new questions and aswers*/
        const startGame = () => {
          setCount(0);
          setScore(0);
          for (let i = 0; i <= loadedQuestion.length - 1; i++) {
            everyAnswer.push(incorrectAnswers[i].concat(correctAnswer[i]));
          }
          getNewQuestion();
        };

        /*function to get new question: check if there are questions left and if not, go to end page. 
        otherwise,  increment question counter, select next array of questions and answers.
        splice the answers and question used. after game is ready, 
        update accepting answers to true */

        const getNewQuestion = () => {
          if (
            everyAnswer.length === 0 ||
            questionCounter > loadedQuestion.length
          ) {
            return (window.location = `http://${windowLoc}/end`);
          }

          questionCounter++;
          setCount(questionCounter);
          setTotalCount(data.results.length);
          setQuestion(loadedQuestion[questionIndex]);

          //function to randomly assign answers to each option
          const func = (set, number, index) => {
            let answerIndex = Math.floor(Math.random() * number);
            //(FIX HARD CODED ARRAY)
            set(everyAnswer[index][answerIndex]);
            everyAnswer[index].splice(answerIndex, 1);
            //console.log(newEveryAnswer[questionIndex]);
            return set;
          };

          //call functions to assign answers (FIX HARD CODED ARRAY)
          // func(setA, 4, questionIndex);

          func(setA, 4, questionIndex);
          func(setB, 3, questionIndex);
          func(setC, 2, questionIndex);
          func(setD, 1, questionIndex);

          everyAnswer.shift();
          questionIndex++;

          setAcceptingAnswers(true);
        };

        /*to check if user got the correct answer, first check that accepting answers is  allowing answers.
        if it isn't, do nothing. if it is, change accepting answers to not accepting, get the option
        user chose and compare to right answer. if right, turn choice green if wrong turn choice red. 
        give it a second, remove the color and get the next question */

        //increment question coutner
        /* questionCounter++; */
        //set total number of questions
        /* setTotalCount(data.results.length); */
        //set number of questions answered

        //set current questions (FIX HARD CODED ARRAY)
        /* setQuestion(loadedQuestion[0]);  */

        //set questions
        /*  const getNewQuestion = () => {
          if (
            newEveryAnswer.length === 0 ||
            questionCounter > loadedQuestion.length
          ) {
            return (window.location = `http://${windowLoc}/end`);
          }
          //newEveryAnswer.shift();
          setTimeout(() => {
            getNewQuestion();
          }, 2000);
        }; */

        //loadedQuestion.splice(0, 1);

        //mix all answers together
        /*  const copyIncorrectAnswers = [...incorrectAnswers];
        let newEveryAnswer = []; */
        // everyAnswer.push(correctAnswer);
        /* everyAnswer.forEach((answer) => {
          answer.push(correctAnswer);
        }); */

        /* for (let i = 0; i <= loadedQuestion.length - 1; i++) {
          newEveryAnswer.push(copyIncorrectAnswers[i].concat(correctAnswer[i]));
        } */

        //decode answers
        /* const formattedAnswers = newEveryAnswer.map(
          (answer) => answer //missing atob() e toString()
        ); */

        /* //function to randomly assign answers to each option
        const func = (set, number) => {
          let answerIndex = Math.floor(Math.random() * number);
          //(FIX HARD CODED ARRAY)
          set(newEveryAnswer[0][answerIndex]);
          newEveryAnswer[0].splice(answerIndex, 1);
          return set;
        };
        //call functions to assign answers (FIX HARD CODED ARRAY)
        func(setA, 4);
        func(setB, 3);
        func(setC, 2);
        func(setD, 1); */

        /* newEveryAnswer.shift();
        getNewQuestion(); */

        setIsPending(false);
        setError(null);
        startGame();
      })
      .catch((error) => {
        console.error(error);
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);

  console.log(formattedAnswers);

  const showAnswer = (e) => {
    const clickedAnswer = e.target.textContent;
    const copyCorrectAnswer = localStorage.getItem("currentCorrectAnswer");
    const getElem = e.target.classList;
    if (!acceptingAnswers) return;

    setAcceptingAnswers(false);
    if (copyCorrectAnswer === clickedAnswer) {
      getElem.add("correct");
      setScore((score += CORRECT_POINTS));
    } else {
      getElem.add("incorrect");
    }
    /* setTimeout(() => {
      getElem.remove("correct");
      getElem.remove("incorrect");
      getNewQuestion();
    }, 1100); */
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

export default Game;
