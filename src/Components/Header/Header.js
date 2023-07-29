// Header.js
import React, { useState } from 'react';
import './Header.css';
import { HiMenuAlt4 } from 'react-icons/hi';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
   
    if(window.innerWidth<=768)
    {
      setMenu(!menu);
    }
  };

  return (
    <header className="header-absolute">
      <div className="spaceX light">Xishant</div>
      <nav className={menu ? 'heigh light fon-500 pointer spaceX' : ' light fon-500 pointer spaceX'}>
        <span> <a href='#hero'>Home</a></span>
        <span><a href='#About'>About</a></span>
        <span><a href='#Skills'>Skills</a></span>
        <span><a href='#Projects'>Projects</a></span>
        <span><a href='#Contact'>Contact</a></span>
      </nav>
      <div>
        <span></span>
        <span className="header-burger">
          <HiMenuAlt4 fontSize="2rem" color="white" onClick={menuHandler} />
        </span>
      </div>
    </header>
  );
};

export default Header;
