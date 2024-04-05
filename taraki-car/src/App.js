import React from 'react';

import { Footer, Consortium, Blog, Database, About, Header, Team } from './container';
import { Navbar, Partners, Subscribe } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient_bg">
            <Navbar />
            <Header />
        </div>
        <Partners />
        <Database />
        <About />
        <Consortium />
        <Subscribe />
        <Blog />
        <Team />
        <Footer />
        </div>
  )
}

export default App