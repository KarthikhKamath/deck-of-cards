import React from 'react';
import "./Card.css";

function Card(props) {
  const findNum = (card) => {
    const index = card.indexOf("-");
    const num = card.slice(index + 1);
    return num;
  };

  const findIcon = (card) => {
    const index = card.indexOf("-");
    const type = card.slice(0, index);
    if (type === "Clubs") {
      return "♣️";
    } else if (type === "Diamonds") {
      return "♦️";
    } else if (type === "Spades") {
      return "♠️";
    } else if (type === "Hearts") {
      return "💓";
    }
  };

  return (
    <div className='card'>
      <div className="number">{findNum(props.data)}</div>
      <div className="icon">{findIcon(props.data)}</div>
    </div>
  );
}

export default Card;
