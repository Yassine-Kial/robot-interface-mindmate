import React, { Component } from 'react';
import video from '../assets/talking.mp4';

class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <video src={video} width="800" height="480" autoPlay loop>
        </video>
      </div>
    );
  }   
}

export default VideoPlayer;