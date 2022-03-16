import React from "react";
//import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading homeHeading">Trivia Time</h1>
      <div className="buttons">
        <Link id="gkBtn" className="btn homeBtn" to="/game/general">
          General
        </Link>
        <Link id="historyBtn" className="btn homeBtn" to="/game/history">
          History
        </Link>
        <Link id="geographyBtn" className="btn homeBtn" to="/game/geography">
          Geography
        </Link>
        <Link id="sportsBtn" className="btn homeBtn" to="/game/sports">
          Sports
        </Link>
        <Link id="mythologyBtn" className="btn homeBtn" to="/game/mythology">
          Mythology
        </Link>
        <Link id="musicBtn" className="btn homeBtn" to="/game/music">
          Music
        </Link>
        <Link id="scienceBtn" className="btn homeBtn" to="/game/science">
          Science!
        </Link>
        <Link id="politicsBtn" className="btn homeBtn" to="/game/politics">
          Politics
        </Link>
        <Link id="animalsBtn" className="btn homeBtn" to="/game/animals">
          Animals
        </Link>
        <Link id="randomBtn" className="btn homeBtn" to="/game/random">
          Random
        </Link>
      </div>
    </div>
  );
};

export default Home;
