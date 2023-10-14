import { useState, useEffect } from 'react';
import SingleCard from '../Components/SingleCard';
import '../styles/SingleCard.css';
import '../styles/Games.css';
import helmet from '../assets/helmet-1.png';
import potion from '../assets/potion-1.png';

import ring from '../assets/ring-1.png';

import scroll from '../assets/scroll-1.png';

import shield from '../assets/shield-1.png';

import sword from '../assets/sword-1.png';

import Modal from '../Components/Modal';

import { useNavigate } from 'react-router-dom';

const cardImages = [
  { src: helmet, matched: false },
  { src: potion, matched: false },
  { src: ring, matched: false },
  { src: scroll, matched: false },
  { src: shield, matched: false },
  { src: sword, matched: false },
];

function MatchingPairs()
{

  const  navigate = useNavigate();
  // You can now use the 'history' object to navigate to other pages
  const handleStartClick = () => {
      navigate('/Menu');
  };
    

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setShowModal(false)
    
  }
  // handle a choice
  const handleChoice = (card) => {
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }

    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start new game automagically
  useEffect(() => {
    shuffleCards()
  }, [])


  const [showModal, setShowModal] = useState(false);
    useEffect(() => {
    // Check if all cards are matched
    if (cards.every(card => card.matched)) {
      setShowModal(true); // Show the modal when all cards are matched
    }
  }, [cards]);
  return (
    <div className="kenza">
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>You've won!</p>
                <p>Turns: {turns}</p>

          <button onClick={shuffleCards}>New Game</button>
          <button onClick={() =>
          {
            setShowModal(false);
            handleStartClick();
          }}>menu</button>
        </Modal>
      )}
    </div>
  );
}
export default MatchingPairs;