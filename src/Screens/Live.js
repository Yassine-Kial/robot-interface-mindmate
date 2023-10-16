import React from 'react';
import '../styles/Live.css';
import VideoPlayer from '../Components/VideoPlayer';
import gif from '../assets/Robot-Eyes-unscreen.gif';
function Live(props) {
    return (
      <div className='gifContainer'>

                     <img className='gif' src={gif} alt="Your GIF Image" />



      </div>
        

        
            
 );
}
export default Live;
