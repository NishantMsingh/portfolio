import React from 'react';
import HeroSection from './Components/Hero/Hero';
import Header from './Components/Header/Header';
import About from "./Components/About/About";
import Work from './Components/Work/Work';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="contaier-fluid">
    
      <Header />
      <HeroSection />
      <About />
      <Work />
      <Project />
      {/* <Footer /> */}


    </div>
  );
}

export default App;
