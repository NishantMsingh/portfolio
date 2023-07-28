import React from 'react'
import styler from './Header.module.css';
import {HiMenuAlt4} from "react-icons/hi"
const Header = () => {
  return (
    <header className={styler["header-absolute"]} >
        <div className='spaceX light'>Xishant
        </div>
        <nav className='light fon-500 pointer spaceX'> 
          <span>Home</span>
          <span>About</span>
          <span>Service</span>
          <span>Resume</span>
          <span>Contact</span>
        </nav>
        <div>
          <span></span>
           <span className={styler['header-burger']}><HiMenuAlt4 fontSize="2rem" color="white" /></span>
        </div>
     </header>
  )
}

export default Header
