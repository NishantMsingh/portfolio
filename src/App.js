import React from 'react';
import HeroSection from './Components/Hero/Hero';
import Header from './Components/Header/Header';
import About from "./Components/About/About";
import Work from './Components/Work/Work';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import SkillSection from './Components/Skills/SkillSection';
function App() {
  return (
    <div className="contaier-fluid">
      <Header />
      <HeroSection />
      <About />
      <Work />
      <Project />
      <SkillSection />
      <Footer />
    </div>
  );
}

export default App;
