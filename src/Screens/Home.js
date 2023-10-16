import React from 'react';
import '../styles/Home.css';

import Logo from '../assets/Logo';
import Pellets from '../assets/Pellets';
import Bar1 from '../assets/Bar1';
import Bar2 from '../assets/Bar2';
import { useNavigate } from 'react-router-dom';
function Home(props)
{



   const sendNotification = (title, content, backgroundColor) =>
    {
       
        const currentTime = new Date();

  // Format the time as 'HH:mm'
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  const notificationData = {
    title,
    content,
    time: formattedTime,
    backgroundColor,
  };

  console.log('Notification Data:', notificationData);

  fetch('http://localhost:5000/storeNotification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notificationData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Message from the server
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

  

const  navigate = useNavigate();
    const handleStartClick = () =>
    {
        sendNotification('Activity Alert','Yassine just started playing with Memento','pink');
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