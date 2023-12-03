// Dependencies

import React, { useState } from "react";
import Cookies from 'js-cookie';
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Select from "react-select";
import UseMediaQuery from "../Home Page/UseMediaQuery.js";
import MinMediaQuery from "../Home Page/MinMediaQuery.js";
import { createGlobalStyle } from 'styled-components'

//Styles

import '../Styles/Invoice.css';
import { DashBoardScreen, DashBoardNavigation, DashBoardSideBar, DashBoardContent, 
        DashBoardMain, DashBoardActionButtons, DashBoardActionTabs, 
        DashBoardGraphContant, DashBoardActionTabsInput, DashBoardActionTabsLabel,HomeDashBoard, DashBoardTabContent,DashBoardThreeDash,
        DashBoardNavigationLogo, DashBoardNavigationTitle, DashBoardNavigationSearch,
        Logoseparation,
        DashBoardNavigationDN,
        DashBoardNavigationDNInput,
        DashBoardNavigationNotification,
        DashBoardNavigationProfile,
        DashBoardSideBarSeperation,
        DashBoardSideBarButton,
        DashBoardSideBarSeperationBottom,
        LogoutBoxButton, LogoutBoxHighlight,DashBoardMultibox,DashBoardBox1,DashBoardBox2,DashBoardBox3,
        DashBoardBox4,DashBoardBox5,DashBoardBox6,DashBoardBox7,DashBoardBox8} from './StyleDashboard.js';

import {ApplyNavigationProfileEmail, ApplyNavigationLogo, ApplyNavigationProfileToggle, ApplyNavigationProfile }from '../ApplyInvoice/StyleApply.js'

// Components

import Logo from '../Icons/BITLogo.png';
import Bell from '../Icons/bell.png';
import User from '../Icons/profile.png';
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineHome, AiFillSlackCircle } from "react-icons/ai";

import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENTID;
const API_URL = process.env.REACT_APP_API_URL;

//Modal Styles
function DashBoard() {

    const [activeTab, setActiveTab] = useState('Proposed');
    const [activeLink, setActiveLink] = useState('Home');
    const Navigate = useNavigate();

    const handleTabChange = (e) => {
        setActiveTab(e);
        const winthdraw = async () => {
            const id = "616b4b3b4b3b4b3b4b3b4b3b";
        const response = await axios.post(`${API_URL}/withdraw`, { id: id });
        console.log(response);
        }
        winthdraw();
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
    };

    const handleApplyClick = () => {
        Navigate('/Apply');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    const matches = UseMediaQuery("(max-width:1025px)");
    const minmatches = MinMediaQuery("(min-width:1025px)");
    const [email, setEmail] = useState('');
    const [showEmail, setShowEmail] = useState(false);

    const toggleEmail = () => {
        setShowEmail(!showEmail);
    }
    
    return (
        <DashBoardScreen>

            {/* Navigation Bar */}

            <DashBoardNavigation>
                {/* Navebar Three Dash */}
                <DashBoardThreeDash >{matches?(
                      <label for="openSidebarMenu" class="sidebarIconToggle">
                      <div class="spinner diagonal part-1"></div>
                      <div class="spinner horizontal"></div>
                      <div class="spinner diagonal part-2"></div>
                    </label>
                ):null}</DashBoardThreeDash>

                {/* Navigation Bar Logo */}
                {
                    minmatches?(
                        <DashBoardNavigationLogo src={Logo} alt='BIT Logo'/>
                        
                    ):null
                }
                {minmatches?(
                    <DashBoardNavigationDN for="switch">
                    <DashBoardNavigationDNInput id="switch" type="checkbox" />

                    {/* Named as moon but this is for sun */}

                    <div class="icon icon--moon">
                        <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                        </svg>
                    </div>
                
                    {/* Named as sun but this is for moon */}

                    <div class="icon icon--sun">
                        <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </DashBoardNavigationDN>
                ):null
                }
                {minmatches?(
                    <DashBoardNavigationLogo className="logo2" src={Bell} alt='BIT Logo'/>
                ):null}
                {/* Navigation Bar Title */}

                <DashBoardNavigationTitle>Invoice Portal</DashBoardNavigationTitle>
                <ApplyNavigationLogo className="logo1" src={User} alt='BIT Logo'/>

                {/* Navigation Bar Search functionality box */}

                {/* <DashBoardNavigationSearch>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                    <Select options={[]} onKeyDown={handleKeyDown} />
                    </Stack>
                </DashBoardNavigationSearch> */}

                {/* Theme toogle functionality switch */}
                    

                    
                <ApplyNavigationProfile className="logo2" onClick={toggleEmail} >
                    <RxAvatar id="ProfileAvatar" />

                    {showEmail && (
                        <ApplyNavigationProfileToggle>
                            <ApplyNavigationProfileEmail>{ email }</ApplyNavigationProfileEmail>
                        </ApplyNavigationProfileToggle>
                    )}
                </ApplyNavigationProfile>   
                
                        
                   

                    {/* Profile Avatar */}

                   
                
                
            </DashBoardNavigation>

            {/* Below the Navigation Bar is the Home Page Content. */}
            {/* This is broken down into the Side Bar and the Main Content. */}

            <DashBoardContent >

                {/* Home page side bar with the navigation links. */}
                {(minmatches)?(
                <DashBoardSideBar>

                    {/* Home page side bar navigation links. */}

                    <DashBoardSideBarSeperation>

                        {/* Showing the navigation links for the Home Page Side Bar. */}
                        <DashBoardSideBarButton onClick={ () => handleLinkChange('Home') }>
                            <AiOutlineHome id="SideBarHomeIcon" />
                            <div className="sidebar-text">Home</div>
                        </DashBoardSideBarButton>

                        {/* Showing the Invoices related to TAC */}

                        <DashBoardSideBarButton onClick={ () => handleLinkChange('TAC') }>
                            <AiFillSlackCircle id="SideBarHomeIcon" />
                            <div className="sidebar-text">TAC</div>
                        </DashBoardSideBarButton>

                        {/* Showing the Invoices related to Other events */}

                        <DashBoardSideBarButton onClick={ () => handleLinkChange('Other') }>
                            <AiFillSlackCircle id="SideBarHomeIcon" />
                            <div className="sidebar-text">Other</div>
                        </DashBoardSideBarButton>
                    </DashBoardSideBarSeperation>

                    {/* Home page side bar logout button. */}

                    <DashBoardSideBarSeperationBottom>
                    <LogoutBoxButton>
                        <LogoutBoxHighlight>
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={() => onSuccess()}
                            onFailure={() => onFailure()}
                            className="logout-button"
                        />
                        </LogoutBoxHighlight>
                        </LogoutBoxButton>
                    </DashBoardSideBarSeperationBottom>
                </DashBoardSideBar>
                ):
                null
                }
                {/* Home page main content about the proposed, approved and rejected invoices. */}

                <DashBoardMain>
                <HomeDashBoard>Student Dashboard</HomeDashBoard>
                <div className="Multi-box">
                        <DashBoardBox1 className="grid-box"></DashBoardBox1>
                        <DashBoardBox2 className="grid-box"></DashBoardBox2>
                        <DashBoardBox3 className="grid-box"></DashBoardBox3>
                        <DashBoardBox4 className="grid-box"></DashBoardBox4>
                        <DashBoardBox5 className="grid-box"></DashBoardBox5>
                        <DashBoardBox6 className="grid-box"></DashBoardBox6>
                        <DashBoardBox7 className="grid-box"></DashBoardBox7>
                        <DashBoardBox8 className="grid-box"></DashBoardBox8>
                </div>
                    <HomeDashBoard>Graph:</HomeDashBoard>
                    <DashBoardGraphContant>
                        
                    </DashBoardGraphContant>
                </DashBoardMain>
            </DashBoardContent>
        </DashBoardScreen>
    );
}

export default DashBoard;