import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from "../Icons/BITLogo.png"
import UseMediaQuery from '../Home Page/UseMediaQuery';
import MinMediaQuery from '../Home Page/MinMediaQuery';
import User from "../Icons/profile.png"
import { GoogleLogout } from "react-google-login";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const matches = UseMediaQuery("(max-width:1025px)");

  const minmatches = MinMediaQuery("(min-width:710px)");

  return (
    <>
      <IconContext.Provider value={{ color: '#484e5b' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars className='toggle-botton' onClick={showSidebar} />
          </Link>
          {
            minmatches?(
              <img className='bit-logo' src={logo} alt="" />
            ):
            (null)
          }
          <h1  className='nav-title'>Invoice Portal</h1>
          <img className="nav-user" src={User} alt="" />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
