import React from 'react';
import './socials.css';
import { ig, twitter, ks, patreon} from './imports';

const Socials = () => {
    return (
        <div className="tuonela__socials section__padding" id="socials">
            <div>
                <a href="https://www.instagram.com/bonfireriverstudios/">
                    <img src={ig} alt="ig"/>
                </a>
            </div>
            <div>
                <a href="https://twitter.com/bonfire_river">
                    <img src={twitter} alt="twitter"/>
                </a>
            </div>
            <div>
                <a href="https://www.patreon.com/bonfireriverstudios">
                    <img src={patreon} alt="patreon" />
                </a>
            </div>
        </div>
    )
}

export default Socials