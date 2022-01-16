import React from 'react';
import { Feature } from '../../components';
import './bios.css';

function Bios() {
    return (
        <div>
            <div className="tuonela__whattuonela section__margin" id="bts">
                <div className="tuonela__whattuonela-heading">
                    <h1 className="gradient__text">Behind The Scenes</h1>
                    {/* <p>Find Tuonela from Steam</p> */}
                </div>
                <div className="tuonela__whattuonela-feature">
                    <Feature title="Daniel" text="Daniel is the Environment Artist and Level Designer here in the North. He loves mixing together the successful ingredients of game design like mixing a good drink."/>
                    <Feature title="Gabriel" text="Gabriel is the Sound Designer and Cinematographer of Bonfire River Studios. His specialties include sound effect production, video editing, graphic design and musical composition."/>
                    <Feature title="June" text="June happily holds the title of Concept Artist here at Bonfire River Studios. They made those beautiful concepts on our social media. You can bet we're proud."/>
                    <Feature title="Venla" text="Venla is responsible of programming and character desing of Bonfire River Studios."/>
                </div>
            </div>
        </div>
    )
}

export default Bios