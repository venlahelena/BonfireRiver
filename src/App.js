import React from 'react';
import './App.css';

import {Features, Footer, Header, WhatTuonela, Bios} from './containers';
import {Socials, Navbar } from './components';


function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
            <Navbar />
            <Header />
            </div>
            <Socials />
            <WhatTuonela />
            {/* <Bios /> */}
            <Footer />
        </div>
    )
}

export default App
