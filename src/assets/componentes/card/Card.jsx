import React from "react";
import "./Card.css";

const Card = ({ lang, img, fcolor, scolor }) => {
  return (
    <div
      className="container"
      style={{ background: `linear-gradient(to left ${fcolor}, ${scolor})` }}
    >
      <img src={img} alt="images"></img>
      <h2>{lang}</h2>
    </div>
  );
};

export default Card;
