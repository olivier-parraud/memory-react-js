import React from 'react';
import './Card.css';

const Card = ({ card, handleCardClick, isFlipped, isMatched }) => {
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      handleCardClick(card);
    }
  };

  return (
    <div 
      className={`card ${isFlipped || isMatched ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <span>?</span>
        </div>
        <div className="card-back">
          <span>{card.content}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
