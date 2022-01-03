import React from 'react';
import './App.css';

import {Blog, Features, Footer, Header, Possibility, WhatTuonela} from './containers';
import { CTA, Brand, Navbar } from './components';


function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
            <Navbar />
            <Header />
            </div>
            <Brand />
            <WhatTuonela />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
