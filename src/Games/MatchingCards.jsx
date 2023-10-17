import React from 'react';
import '../styles/MatchingCards.css';
import icon from '../assets/que_icon.svg';
import img1 from '../assets/img-1.png';
import img2 from '../assets/img-2.png';
import img3 from '../assets/img-3.png';
import img4 from '../assets/img-4.png';
import img5 from '../assets/img-5.png';
import img6 from '../assets/img-6.png';
import img7 from '../assets/img-7.png';

import img8 from '../assets/img-8.png';

function MatchingCards(props)
{
    

    const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

    function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = "";

  // Create an array of indexes for 16 cards
  let arr = [...Array(16).keys()];

  // Shuffle the indexes
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Create an array of image imports for all 16 cards
  const imageAssets = [
    img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img7, img8, img7, img8
  ];

  cards.forEach((card, i) => {
    card.classList.remove("flip");

    // Set the image source using the imported images and the shuffled index
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = imageAssets[arr[i]];
    
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
    return (
        <div className="wrapper">
      <ul className="cards">
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-1.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-6.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-3.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-2.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-1.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-5.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-2.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-6.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-3.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-4.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-5.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-4.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-4.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-4.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-4.png" alt="card-img"/>
          </div>
        </li>
        <li className="card">
          <div className="view front-view">
            <img src={icon} alt="icon"/>
          </div>
          <div className="view back-view">
            <img src="../assets/img-4.png" alt="card-img"/>
          </div>
        </li>
      </ul>
    </div>

 
    );
}

export default MatchingCards;