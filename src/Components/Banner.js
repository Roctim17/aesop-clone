import React from 'react';
import '../Styles/Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='text'>
                <div className='title'>
                    <h1>Aesop</h1>
                </div>
                <div>
                    <h3>The Poetry of Place</h3>
                    <p className='py-3'>The sun rises on four new Gift Kits, each inspired by the <br /> design of an Aesop store and the   neighbourhood in which <br /> it resides.</p>
                    <button className='btn custom-btn'> <span className='btn-text'>Explore the Gift Kits </span> <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;