import React from "react";

const AnswerOption = (props) => {
  return (
    <div className="choice-box">
      <p className="choice-option">{props.letter}</p>
      <p className="choice-text" onMouseDown={props.picked}>
        {props.answer}
      </p>
    </div>
  );
};

export default AnswerOption;
