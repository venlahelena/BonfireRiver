import React from 'react';
import './App.css';

import {Features, Footer, Header, WhatTuonela} from './containers';
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
            <Footer />
        </div>
    )
}

export default App
