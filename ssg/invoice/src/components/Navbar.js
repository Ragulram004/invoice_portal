import React, { useState,useEffect,useRef } from 'react';
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
import Cookies from 'js-cookie';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const matches = UseMediaQuery("(max-width:1025px)");

  const minmatches = MinMediaQuery("(min-width:710px)");

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  const [name, setName] = useState('');

  // useEffect(() => {
  //   if(activeTab === 'Proposed') {
  //       console.log("HomeLink is active");
  //   }
  //   const authToken = Cookies.get('token');

  //   const verifyToken = async () => {
  //       try {
  //           const response = await axios.post(`${API_URL}/verifyToken`, { token: authToken });
  //           if (response.status === 200) {
  //               setName(response.data.name);

  let count = 0;

  useEffect(() => {
    const authToken = Cookies.get('token');

    const verifyToken = async () => {
      try {
        const response = await axios.post(`${API_URL}/verifyToken`, { token: authToken });
        if (response.status === 200) {
          setName(response.data.name);
          count += 1;
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    verifyToken();
  }
    , [count === 0]);

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

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
          <div className="App">
            <div className='menu-container' ref={menuRef}>
              <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <img src={User}></img>
              </div>

              <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                <ul>
                  <DropdownItem  text = {name}/>
                  <DropdownItem text = {"Dark"}/>
                  <DropdownItem  text = {"Light"}/>
                  {/* <DropdownItem img = {settings} text = {"Settings"}/>
                  <DropdownItem img = {help} text = {"Helps"}/>
                  <DropdownItem img = {logout} text = {"Logout"}/> */}
                </ul>
              </div>
            </div>
          </div>
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
function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Navbar;
