import React from 'react';
import { Feature } from '../../components';
import './whattuonela.css';

function WhatTuonela() {
    return (
        <div>
            <div className="tuonela__whattuonela section__margin" id="wtuonela">
                <div className="tuonela__whattuonela-heading">
                    <h1 className="gradient__text">Tuonela</h1>
                    {/* <p>Find Tuonela from Steam</p> */}
                </div>
                <div className="tuonela__whattuonela-feature">
                    <Feature title="Journey To Tuonela" text="Tuonela is Norse RPG inspired by Finnish mythology. Game is heavily based on Finnish natioanl epic Kalevala. Player will get to adventure."/>
                    <Feature title="Goals, Hopes and Dreams" text="Our goals, hopes and dreams for the game"/>
                    <Feature title="Final words" text="Some final toughts "/>
                </div>
            </div>
        </div>
    )
}

export default WhatTuonela