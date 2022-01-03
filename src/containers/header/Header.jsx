import React from 'react';
import './header.css';

import bonfire from '../../assets/brs-bg-small.png'

function Header() {
    return (
        <div>
            <div className="tuonela__header section__padding" id="home">
                <div className="tuonela__header-content">
                    <h1 className="gradient__text">Bonfire River studios</h1>
                    <p>Something about studio and that we are working with tuonela </p>
                </div>
                <div className="tuonela__header-image">
                    <img src={bonfire} alt="bonfire"/>
                </div>
            </div>
        </div>
    )
}

export default Header