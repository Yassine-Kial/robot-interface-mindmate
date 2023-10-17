import React, { Component } from 'react';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissor from '../assets/scissors.png';
import '../styles/RockPaperScissor.css';

class RockPaperScissors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userResultSrc: rock,
      cpuResultSrc: rock,
      result: 'Let\'s Play!!',
      optionImages: [
        {
          src: rock,
          label: 'Rock',
        },
        {
          src: paper,
          label: 'Paper',
        },
        {
          src: scissor,
          label: 'Scissors',
        },
      ],
      gameStarted: false,
    };
  }

  handleOptionClick = (index) => {
    const { optionImages } = this.state;
    this.setState({
      userResultSrc: optionImages[index].src,
      cpuResultSrc: {rock},
      result: 'Wait...',
      gameStarted: true,
    });

    setTimeout(() => {
      this.playGame(index);
    }, 2500);
  };

  playGame = (userChoiceIndex) => {
    const { optionImages } = this.state;
    const cpuChoiceIndex = Math.floor(Math.random() * 3);

    const userValue = ['R', 'P', 'S'][userChoiceIndex];
    const cpuValue = ['R', 'P', 'S'][cpuChoiceIndex];

    const outcomes = {
      RR: 'Draw',
      RP: 'Memento',
      RS: 'You',
      PP: 'Draw',
      PR: 'You',
      PS: 'Memento',
      SS: 'Draw',
      SR: 'Memento',
      SP: 'You',
    };

    const outcomeValue = outcomes[userValue + cpuValue];

    this.setState({
      cpuResultSrc: optionImages[cpuChoiceIndex].src,
      result: userValue === cpuValue ? 'Match Draw' : `${outcomeValue} Won!!`,
      gameStarted: false,
    });
  };

  render() {
    const { userResultSrc, cpuResultSrc, result, optionImages, gameStarted } = this.state;

    return (
      <div className={`container ${gameStarted ? 'start' : ''}`}>
        <div className="result_field">
          <div className="result_images">
            <span className="user_result">
              <img src={userResultSrc} alt="" />
            </span>
            <span className="cpu_result">
              <img src={cpuResultSrc} alt="" />
            </span>
          </div>
          <div className="result">{result}</div>
        </div>
        <div className="option_images">
          {optionImages.map((option, index) => (
            <span
              key={index}
              className={`option_image ${gameStarted ? 'disabled' : ''}`}
              onClick={() => this.handleOptionClick(index)}
            >
              <img src={option.src} alt="" />
              <p>{option.label}</p>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
export default RockPaperScissors;
