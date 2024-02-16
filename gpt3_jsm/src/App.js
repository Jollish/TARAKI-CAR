import React from 'react';

import { Footer, Possibility, Blog, Features, WhatGPT3, Header } from './container';
import { Navbar, Brand, CTA } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient_bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        </div>
  )
}

export default App