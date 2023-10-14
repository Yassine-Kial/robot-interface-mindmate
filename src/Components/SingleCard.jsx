import React from 'react';
import '../styles/SingleCard.css';
import cover from '../assets/cover.png';
function SingleCard({ card, handleChoice, flipped, disabled })
{
  
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
     <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={cover} onClick={handleClick} alt="cover"/>
      </div>
    </div>
  );
}
export default SingleCard;