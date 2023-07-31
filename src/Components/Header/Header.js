// Header.js
import React, { useState } from 'react';
import './Header.css';
import { HiMenuAlt4 } from 'react-icons/hi';
import resume from "../Assets/Resume/Nishant Rajput.pdf";

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
      <nav className={menu ? 'heigh light fon-500 pointer ddin' : ' light fon-500 pointer ddin'}>
        <span> <a href='#hero' onClick={menuHandler}>Home</a></span>
        <span><a href='#About' onClick={menuHandler}>About</a></span>
        <span><a href='#Skills' onClick={menuHandler}>Skills</a></span>
        <span><a href='#Projects' onClick={menuHandler}>Projects</a></span>
        <span><a href={resume} download onClick={menuHandler}>Resume</a></span>
        <span><a href='#Contact' onClick={menuHandler}>Contact</a></span>
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
