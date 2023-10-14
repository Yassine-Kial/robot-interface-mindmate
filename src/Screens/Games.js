import React from 'react';
import '../styles/Games.css'
import Logo2 from '../assets/Logo2';
import HoriRect from '../assets/HoriRect';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GameCard from '../Components/GameCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import RightArrow from '../assets/RightArrow';
import LeftArrow from '../assets/LeftArrow';
import Back from '../assets/Back';
import { useNavigate } from 'react-router-dom';
function Games(props)
{
    const  navigate = useNavigate();
  // You can now use the 'history' object to navigate to other pages
  const handleStartClick = () => {
      navigate(-1);
  };
    const match = () =>
    {
        navigate('/MatchingPairs');
    }
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
                <p className='header-text'>Games</p>
                </div>
                <div className='back' onClick={handleStartClick}>
                    <Back/>
                </div>
            </div>
            <div className='main-section'>
            <div className="swiper-button-prev"><LeftArrow/></div>
            <div className='swiper-container'>
                  <Swiper className='swiper-haha'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation={{
    nextEl: '.swiper-button-next', // Specify the CSS class for the next button
    prevEl: '.swiper-button-prev', // Specify the CSS class for the previous button
  }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
                <SwiperSlide onClick={match}>
                    <GameCard title={"Matching Pairs"} backgroundColor={"blue"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <GameCard title={"Matching Pairs"} backgroundColor={"red"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <GameCard title={"Matching Pairs"} backgroundColor={"green"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <GameCard title={"Matching Pairs"} backgroundColor={"orange"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <GameCard title={"Matching Pairs"} backgroundColor={"purple"}/>
                </SwiperSlide>
            </Swiper>  
            </div>
                <div className="swiper-button-next">
                <RightArrow/>
                </div>
                </div>
        </div>
        
    );
}

export default Games;