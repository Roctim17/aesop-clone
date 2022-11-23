import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import "../Styles/Slider.css";
import { sliderData } from "../assets/json/slider-data";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    useEffect(() => {
        setCurrentSlide(0)
    }, [])
    // const auto =()=> {
    //     slideInterval = setInterval(nextSlide, intervalTime)
    // }
    useEffect(() => {
        if (autoScroll) {
            const auto =()=> {
                slideInterval = setInterval(nextSlide, intervalTime);
            };
            auto()
        }
        return ()=> clearInterval(slideInterval)
    }, [currentSlide, slideInterval, autoScroll])

    return (
      <div className='slider'>
      <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
      {/* <i className="fas fa-chevron-square-right arrow next" onClick={nextSlide} ></i> */}
      <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />
      {sliderData.map((slide, index) => {
          const { image} = slide
          return (
              <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
                  {index === currentSlide && (
                      <>
                          <img src={image} alt="slide" />
                          
                      </>
                  )}
              </div>
          )
      })}
  </div>
    
    );
};

export default Slider;