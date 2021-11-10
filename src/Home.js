import React from "react";
//import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <h1>Trivia Time</h1>
      <div className="buttons">
        <Link id="gkBtn" className="btn" to="/game/general">
          General
        </Link>
        <Link id="historyBtn" className="btn" to="/game/history">
          History
        </Link>
        <Link id="geographyBtn" className="btn" to="/game/geography">
          Geography
        </Link>
        <Link id="sportsBtn" className="btn" to="/game/sports">
          Sports
        </Link>
        <Link id="mythologyBtn" className="btn" to="/game/mythology">
          Mythology
        </Link>
        <Link id="musicBtn" className="btn" to="/game/music">
          Music
        </Link>
        <Link id="scienceBtn" className="btn" to="/game/science">
          Science!
        </Link>
        <Link id="politicsBtn" className="btn" to="/game/politics">
          Politics
        </Link>
        <Link id="animalsBtn" className="btn" to="/game/animals">
          Animals
        </Link>
        <Link id="randomBtn" className="btn" to="/game/random">
          Random
        </Link>
      </div>
    </div>
  );
};

export default Home;
