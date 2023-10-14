import React from 'react';
import '../styles/Home.css';

import Logo from '../assets/Logo';
import Pellets from '../assets/Pellets';
import Bar1 from '../assets/Bar1';
import Bar2 from '../assets/Bar2';
import { useNavigate } from 'react-router-dom';
function Home(props)
{



 const  navigate = useNavigate();

  // You can now use the 'history' object to navigate to other pages
  const handleStartClick = () => {
    navigate('/Menu');
  };
    return (
        <div className='home'>
            <div className='header'>

                <div className='logo-container'>
                    <Logo/>
                </div>

                <div className='pellets-container'>
                    <Pellets/>
                </div>   
            </div>


            <div className='button-container'>
                <button className='start-Button' onClick={handleStartClick}>
                <p className='button-text'>Start</p></button>
            </div>



            <div className='slogon-container'>
                <Bar1 className='bar1' />
                <p className='slogon-text'>Together,Transforming <span className='text-highlight'>Alzheimer</span>’s Care</p>
                <Bar2 className='bar2'/>
            </div>
            





        </div>
    );
}
export default Home;