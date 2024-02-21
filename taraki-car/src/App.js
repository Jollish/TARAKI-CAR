import React from 'react';

import { Footer, Consortium, Blog, Database, About, Header } from './container';
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
        <Footer />
        </div>
  )
}

export default App