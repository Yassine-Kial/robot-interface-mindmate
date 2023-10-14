import React from 'react';

function GameCard({title,backgroundColor}) {
    return (
        <div className='card-hello'>
                        <div className='game-image' style={{backgroundColor}}></div>
                        <div className='game-title-container'>
                <p className='game-title'>{title}</p>
                        </div>
        </div>
    );
}

export default GameCard;