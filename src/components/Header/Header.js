import React from "react";
import "./Header.css";
import logo from "./img/Dora_the_Explorer_logo.png";

const header = props => {
  return (
    <div className="navbar navbar-default navbar-fixed-top ">
      <div className="container">
        <p className="navbar-text"> The Clicky Game </p>
        <div className="navbar-text navbar-right">
          <p>Counter: {props.counter}</p>
          <p>Highest Score: {props.hight_score}</p>
        </div>
        <div className="text-center">
          <img src={logo} alt="logo Dora" width="20%" />
        </div>
      </div>
    </div>
  );
};

export default header;
