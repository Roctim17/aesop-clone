import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <p className='header-one'>Our privacy policy has been updated effective 31 August. <Link >Read privacy policy</Link></p>
            <p className='two'><span>Click and Collect is now available. Enjoy complimentary carbon neutral shipping on all orders </span>  <span>+</span> </p>
        </div>
    );
};

export default Header;