import React, { Component } from "react";

const Card = props => {
  return (
    <div className="main">
      <img src={props.image} />
      <div>{props.label}</div>
      <div>{props.totalTime}</div>
      <div></div>
    </div>
  );
};

export default Card;
