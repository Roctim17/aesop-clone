import React from 'react';
import finder from '../assets/image/finder.jpg'
import '../Styles/LeftDisplay.css'

const LeftDisplay = () => {
    return (
        <div className='left-display py-5'>
            <div className='right'>
                <img src={finder} alt="" />
            </div>
            <div className='left'>
                <h3>The Gift Finder</h3>
                <p className='text-p'>
                For greater ease of navigation, the Gift Finder provides an opportunity to browse formulations by recipient, function and price.
                </p>
                <button className='btn custom-btn'> <span className='btn-text'>Discover the Gift Finder</span> <i class="fas fa-arrow-right"></i></button>
            </div>

        </div>
    );
};

export default LeftDisplay;