import React from "react";
import Option from "./Option";
import { Link } from "react-router-dom";

const LoadedGame = (props) => {
  return (
    <div className="game">
      <div className="header">
        <div id="item">
          <p className="item-prefix">Question</p>
          <h1 className="main-text" id="questionCounter">
            {props.currentQuestion} / {props.totalQuestion}
          </h1>
        </div>
        <div id="item">
          <p className="item-prefix">Score</p>
          <h1 className="main-text" id="score">
            {props.score}
          </h1>
        </div>
      </div>
      <h2 id="question">{props.question}</h2>
      <div id="choicesContainer">
        <Option picked={props.function} letter={"A"} answer={props.A} />
        <Option picked={props.function} letter={"B"} answer={props.B} />
        <Option picked={props.function} letter={"C"} answer={props.C} />
        <Option picked={props.function} letter={"D"} answer={props.D} />
      </div>
      <div id="footer">
        <Link id="homeBtn" className="btn" to="/" /* name="Home" */>
          Home
        </Link>
      </div>
    </div>
  );
};

export default LoadedGame;
