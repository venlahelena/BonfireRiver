import React from 'react';
import { Bio } from '../../components';
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
                    <Bio img="" title="Daniel" text="Daniel is the Environment Artist and Level Designer here in the North. He loves mixing together the successful ingredients of game design like mixing a good drink."/>
                    <Bio img="" title="Gabriel" text="Gabriel is the Sound Designer and Cinematographer of Bonfire River Studios. His specialties include sound effect production, video editing, graphic design and musical composition."/>
                    <Bio img="" title="June" text="Juniper happily holds the title of Concept Artist here at Bonfire River Studios. They're passionate about storytelling and making art make sense."/>
                    <Bio img="" title="Venla" text="Venla is the programmer and character desinger at Bonfire River Studios. She is doinf "/>
                </div>
            </div>
        </div>
    )
}

export default Bios