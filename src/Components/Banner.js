import React from 'react';
import '../Styles/Banner.css'
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Banner = () => {
    return (
        <div className='banner'>
            <nav className='nav'>
                <div className='logo'>
                   <h3>Aesop</h3>
                </div>
                <div className='menu'>
                    <div><AiOutlineSearch/></div>
                    <div><p>Cart</p></div>
                    <div><HiOutlineMenuAlt4/></div>

                </div>
            </nav>
            <div className='text'>
                <div className='title'>
                    <h1>Aesop</h1>
                </div>
                <div className='text-area'>
                    <h3>The Poetry of Place</h3>
                    <p className='py-3'>The sun rises on four new Gift Kits, each inspired by the  design of an Aesop store and the   neighbourhood in which  it resides.</p>
                    <button className='btn custom-btn'> <span className='btn-text'>Explore the Gift Kits </span> <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;