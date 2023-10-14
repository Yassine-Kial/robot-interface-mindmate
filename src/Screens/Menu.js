import React from 'react';
import '../styles/Games.css';
import Logo2 from '../assets/Logo2';
import HoriRect from '../assets/HoriRect';
import Func1 from '../assets/Func1';
import Func2 from '../assets/Func2';
import Func3 from '../assets/Func3';
import '../styles/Menu.css';
import { useNavigate } from 'react-router-dom';


function Menu(props)
{
    
const  navigate = useNavigate();

  // You can now use the 'history' object to navigate to other pages
  const handleStartClick = () => {
    navigate('/Games');
  };
    
    const live = () =>
    {
        navigate('/Live');
    }

    const runPythonCode = () => {
            fetch('http://192.168.10.34:5000/run-python-code')
            .then(response => response.text())
            .then(data => {
                console.log(data); // This will log the response from the Python code
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>

            <div className='games-header'>

            <div className='logo2-container'>
                <Logo2/>
            </div>
            <div className='hori-container'>
                <HoriRect/>
            </div>
            <div className='header-text-container'>
                <p className='header-text'>Menu</p>
            </div>
            </div>   
            <div className='menu'>
                <div className="func" onClick={runPythonCode}>
                    <Func1/>
                </div>
                <div className="func" onClick={handleStartClick}>
                                        <Func2/>

                                </div>

                                <div className="func" onClick={live}>                    <Func3/>
</div>




            </div>
        </div>
    );
}





export default Menu;