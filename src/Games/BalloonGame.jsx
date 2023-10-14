import React, { Component } from 'react';
import '../styles/Balloon.css';

class BalloonGame extends Component {
  constructor() {
    super();
    this.state = {
      level: 1,
      target: 1,
      balloons: [],
    };
  }

  componentDidMount() {
    this.generateBalloons();
  }

  generateBalloons = () => {
    const { level } = this.state;
    const balloons = [];
    for (let i = 1; i <= level + 4; i++) {
      balloons.push(i);
    }
    this.shuffleArray(balloons);
    this.setState({ balloons });
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  handleBalloonClick = (number) => {
    const { target, level, balloons } = this.state;

    if (number === target) {
      // Correct balloon clicked
      const newBalloons = balloons.filter((balloon) => balloon !== number);
      if (newBalloons.length === 0) {
        // All balloons clicked, move to the next level
        this.setState(
          { level: level + 1, target: 1, balloons: [] },
          this.generateBalloons
        );
      } else {
        this.setState({ target: target + 1, balloons: newBalloons });
      }
    } else {
      // Wrong balloon clicked, game over
      alert('Game Over! You clicked the wrong balloon.');
      this.setState({ level: 1, target: 1, balloons: [] }, this.generateBalloons);
    }
  };

  render() {
    const { balloons, level, target } = this.state;

    return (
      <div className="balloon-game">
        <h1>Balloon Game - Level {level}</h1>
        <div className="balloon-container">
          {balloons.map((number) => (
            <div
              key={number}
              className="balloon"
              onClick={() => this.handleBalloonClick(number)}
            >
              {number}
            </div>
          ))}
        </div>
        <p>Click the balloons in ascending order. Target: {target}</p>
      </div>
    );
  }
}

export default BalloonGame;
