import React from 'react';
import corporate from '../assets/image/corporate.jpg'
import '../Styles/RIghtDisplay.css'

const RightDisplay = () => {
    return (
        <div className='right-display'>
            <div className='left'>
                <p>Tokens of appreciation</p>
                <h3>Corporate gifts</h3>
                <p className='text-p'>
                Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.
                </p>
                <button className='btn custom-btn'> <span className='btn-text'>Learn more about this service</span> <i class="fas fa-arrow-right"></i></button>
            </div>
            <div className='right'>
                <img src={corporate} alt="" />
            </div>
        </div>
    );
};

export default RightDisplay;