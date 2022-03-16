import React from "react";
import { Link } from "react-router-dom";

const End = (props) => {
  const totalFinalScore = localStorage.getItem("finalScore");
  let finalText;
  if (totalFinalScore === "50") {
    finalText = "NERD!";
  } else if (totalFinalScore === "40") {
    finalText = "GOOD STUFF";
  } else if (totalFinalScore === "30") {
    finalText = "NOT BAD..";
  } else if (totalFinalScore < "30" && totalFinalScore > "0") {
    finalText = "OOF..";
  } else {
    finalText = "YOU SUCK!";
  }

  return (
    <div id="final">
      <h1 className="heading finalHeading">{finalText}</h1>
      <h2 className="the-scores" id="totalScore">
        Final Score: {totalFinalScore}
      </h2>
      <Link className="btn" id="restart" to="/">
        Restart
      </Link>
    </div>
  );
};

export default End;
