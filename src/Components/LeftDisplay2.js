import React from 'react';
import convenience from '../assets/image/convenience.jpg'
import '../Styles/LeftDisplay.css'

const LeftDisplay2 = () => {
    return (
        <div className='left-display py-5'>
            <div className='right'>
                <img src={convenience} alt="" />
            </div>
            <div className='left'>
                <p>Our online offering</p>
                <h3>For your convenience</h3>
                <p className='text-p'>
                Just as we do in our physical spaces, it is a pleasure to offer real-time guidance from our consultants online, as well as a range of delivery and collection options to suit your needs.
                </p>
                <button className='btn custom-btn'> <span className='btn-text'>Discover our services</span> <i class="fas fa-arrow-right"></i></button>
            </div>

        </div>
    );
};

export default LeftDisplay2;