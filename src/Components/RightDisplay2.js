import React from 'react';
// import corporate from '../assets/image/corporate.jpg'
import '../Styles/RIghtDisplay.css'
import Slider from './Slider';

const RightDisplay2 = () => {
    return (
        <div className='right-display py-5'>
            <div className='left'>
                <h3>Store locator</h3>
                <p className='text-p'>
                Our consultants are available to host you in-store and provide tailored guidance on gift purchases. 
                </p>
                <button className='btn custom-btn'> <span className='btn-text'>Find a nearby store</span> <i class="fas fa-arrow-right"></i></button>
            </div>
            <div className='right'>
               <Slider/>
            </div>
        </div>
    );
};

export default RightDisplay2;