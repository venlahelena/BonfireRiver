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
                    <Feature title="Journey To Tuonela" text="Tuonela is a Norse Action RPG inspired by the depths of Finnish mythology. In the national epic, Kalevala, the player will find themselves face-to-face with many horrors and monstrosities all around the world. You take the role as the only mortal to escape the underworld of Tuonela alive and your mission is that of a gentleman caller hoping to swoon the daughter of the Queen of the Underworld. Will that be enough for you cross the precarious bridge to return to the underworld. Or do you have different intentions in mind? It is up to you as you make your way back, escaping the horrors of this once beautiful countryside"/>
                    <Feature title="Goals, Hopes and Dreams" text="It is our strongest aspirations to bring the relatively unknown Finnish mythology to the spotlight to allow for an international audience to appreciate and love them as it has for other games such as the Witcher. With the right amount of funding, we will be bringing you an extremely tight and polished Action RPG adventure as one to remember."/>
                    <Feature title="Final words" text="We appreciate you visiting our humble abode here in the frigid  barren lands of the North. We would really appreciate your patronage by way of Patreon, Kickstarter or Paypal donation. However, if it is not financially reasonable, any type of sharing of our social media will go a long way and you will have our warmest and sincere thanks here from the cold. Finally, dear mortal, we hope that you will answer the beckoning siren song of Tuonela. It is calling you."/>
                </div>
            </div>
        </div>
    )
}

export default WhatTuonela