import React from 'react';
import './header.css';

import bonfire from '../../assets/Tuonela-tsp.png'

function Header() {
    return (
        <div>
            <div className="tuonela__header section__padding" id="home">
                <div className="tuonela__header-content">
                    <h1 className="gradient__text">Bonfire River Studios</h1>
                    <p>A small team working on a new Norse RPG inspired by Finnish mythology.</p>
                </div>
                <div className="tuonela__header-image">
                    <img src={bonfire} alt="bonfire"/>
                </div>
            </div>
            <div className="tuonela__header-curve">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0e0f0f" fill-opacity="1" d="M0,288L120,277.3C240,267,480,245,720,245.3C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
            </div>
        </div>
    )
}

export default Header