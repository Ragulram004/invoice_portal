// Dependencies

import React, { useState, useEffect, useRef } from "react";
import Cookies from 'js-cookie';
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Select from "react-select";
import UseMediaQuery from "../Home Page/UseMediaQuery.js";
import MinMediaQuery from "../Home Page/MinMediaQuery.js";
import "./HomePageFaculty.css";


//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain, HomePageActionButtons, HomePageActionTabs, 
        HomePageActionContent, HomePageActionTabsInput, HomePageActionTabsLabel, HomePageTabContent,
        HomePageNavigationLogo, HomePageNavigationTitle, HomePageNavigationSearch,
        HomePageNavigationDN,HomePageThreeDash,
        HomePageNavigationDNInput,
        HomePageNavigationNotification,
        HomePageNavigationProfile,
        HomePageSideBarSeperation,
        HomePageSideBarButton,
        HomePageSideBarSeperationBottom,
        LogoutBoxButton, LogoutBoxHighlight} from './StylesHomePage.js';

//Components

import Logo from '../Icons/BITLogo.png';
import User from '../Icons/profile.png';
import Bell from '../Icons/bell.png';
import { AiOutlineHome, AiFillSlackCircle } from "react-icons/ai";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import { IconContext } from 'react-icons';

import Proposals from "./Components/HomeLink/Proposals.js";
import Approved from "./Components/HomeLink/Approved.js";
import Rejected from "./Components/HomeLink/Rejected.js";
import Completed from "./Components/HomeLink/Completed.js";


import TACLink from "./Components/TACLink.js";
import OtherLink from "./Components/OtherLink";

import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENTID;
const API_URL = process.env.REACT_APP_API_URL;

//Modal Styles
function HomePageFaculty() {

    const [activeTab, setActiveTab] = useState('Proposed');
    const [activeLink, setActiveLink] = useState('Home');
    const Navigate = useNavigate();

    const handleTabChange = (e) => {
        setActiveTab(e);
    }

    const handleLinkChange = (e) => {
        setActiveLink(e);
    }

    const onSuccess = () => {
        // alert("Logout made successfully");
        Cookies.remove('token');
        console.log("Logged Out...");
        window.location.href = "/";
    };

    const onFailure = () => {
        console.log("Handle failure cases");
        alert("Logout failed");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    const matches = UseMediaQuery("(max-width:1024px)");
    const minmatches = MinMediaQuery("(min-width:1024px)");

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    const [name, setName] = useState('');

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
    
    return (
        <HomePageScreen>
            {/* navigationbar */}
            <IconContext.Provider value={{ color: '#484e5b' }}>
                <div className='navbar'>
                    <img className='bit-logo' src={Logo} alt="" />
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
            </IconContext.Provider>
            {/* end navigationbar */}
            <HomePageContent>
                <HomePageMain>
                    <HomePageActionContent>
                        <HomePageActionTabs>
                            <HomePageActionTabsInput type="radio" id="proposed" name="tabs" value="Proposed" checked={activeTab === 'Proposed'} onChange={() => handleTabChange('Proposed')} />
                            <HomePageActionTabsLabel htmlFor="proposed">Proposed</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="Approved" name="tabs" value="Approved" checked={activeTab === 'Approved'} onChange={() => handleTabChange('Approved')} />
                            <HomePageActionTabsLabel htmlFor="Approved">Approved</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="rejected" name="tabs" value="Rejected" checked={activeTab === 'Rejected'} onChange={() => handleTabChange('Rejected')} />
                            <HomePageActionTabsLabel htmlFor="rejected">Rejected</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="approved" name="tabs" value="Completed" checked={activeTab === 'Completed'} onChange={() => handleTabChange('Completed')} />
                            <HomePageActionTabsLabel htmlFor="approved">Completed</HomePageActionTabsLabel>

                        </HomePageActionTabs>
                        
                        { activeLink === 'Home' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <Proposals activeTab={activeTab}/>}
                                {activeTab === 'Approved' && <Approved activeTab={activeTab}/>}
                                {activeTab === 'Rejected' && <Rejected activeTab={activeTab}/>}
                                {activeTab === 'Completed' && <Completed activeTab={activeTab}/>}
                                
                            </HomePageTabContent> 
                        }
                        { activeLink === 'TAC' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <TACLink />}
                                {activeTab === 'Approved' && <TACLink />}
                                {activeTab === 'Rejected' && <TACLink />}
                                {activeTab === 'Completed' && <TACLink />}

                            </HomePageTabContent>
                        }
                        { activeLink === 'Other' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <OtherLink />}
                                {activeTab === 'Approved' &&  <OtherLink />}
                                {activeTab === 'Rejected' && <OtherLink />}
                                {activeTab === 'Completed' &&  <OtherLink />}
                                
                            </HomePageTabContent>
                        }
                    </HomePageActionContent>
                </HomePageMain>
            </HomePageContent>
        </HomePageScreen>
    );
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );}

export default HomePageFaculty;