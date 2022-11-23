import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

const Navber = () => {
    return (
        <div className='navber'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-3">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Skin Care</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Body & Hand</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Hair</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Fragrance</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Kits & Travel</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Gifts</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Read</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#">Stores</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="#"><i className='fas fa-search'></i></Link>
                            </li>



                        </ul>
                        <form class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item ">
                                    <Link class="nav-link active" aria-current="page" href="#">Log in</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" href="#">Cart</Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navber;