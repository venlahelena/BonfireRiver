import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/bfr-no-bg.png'

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#socials">Socials</a></p>
    <p><a href="#wtuonela">Tuonela</a></p>
    <p><a href="#contact">Contact us</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="tuonela__navbar">
            <div className="tuonela__navbar-links">
                <div className="tuonela__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="tuonela__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="tuonela__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="tuonela__navbar-menu_container scale-up-center">
                        <div className="tuonela__navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar