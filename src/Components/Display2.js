import React from 'react';
import '../Styles/Display.css'
import favoured from '../assets/image/favoured.jpg'
import gestures from '../assets/image/gestures.jpg'

const Display2 = () => {
    return (
        <div className='display '>
            <div className='left'>
                <img src={favoured} alt="" />
                <h6 className=''>Favoured Formulations</h6>
                <p>Tried, tested and trusted, these stalwarts of the basin, bedside and shower supply joy to people of all persuasions.</p>
            </div>
            <div className='right'>
                <img src={gestures} alt="" />
                <h6>Small Gestures</h6>
                <p>These humble offerings are no less impactful than their grander peers and provide important care and replenishment to deserving recipients.</p>
            </div>
        </div>
    );
};

export default Display2;