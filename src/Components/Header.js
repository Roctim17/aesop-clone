import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <p>Our privacy policy has been updated effective 31 August. <Link >Read privacy policy</Link></p>
            <p className='two'>Click and Collect is now available. Enjoy complimentary carbon neutral shipping on all orders   +</p>
        </div>
    );
};

export default Header;