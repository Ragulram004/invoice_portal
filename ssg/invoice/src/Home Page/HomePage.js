// Dependencies

import React, { useState } from "react";
import Cookies from 'js-cookie';
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Select from "react-select";
import UseMediaQuery from "./UseMediaQuery.js";
import MinMediaQuery from "./MinMediaQuery.js";
import { createGlobalStyle } from 'styled-components';
import Navbar from "../components/Navbar.js"

//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain, HomePageActionButtons, HomePageActionTabs, 
        HomePageActionContent, HomePageActionTabsInput, HomePageActionTabsLabel,HomeDashBoard, HomePageTabContent,HomePageThreeDash,
        HomePageNavigationLogo, HomePageNavigationTitle, HomePageNavigationSearch,
        Logoseparation,
        HomePageNavigationDN,
        HomePageNavigationDNInput,
        HomePageNavigationNotification,
        HomePageNavigationProfile,
        HomePageSideBarSeperation,
        HomePageSideBarButton,
        HomePageSideBarSeperationBottom,
        LogoutBoxButton, LogoutBoxHighlight} from './StylesHomePage.js';

import {ApplyNavigationProfileEmail, ApplyNavigationLogo, ApplyNavigationProfileToggle, ApplyNavigationProfile  }from '../ApplyInvoice/StyleApply.js'

//Components

import Logo from '../Icons/BITLogo.png';
import Bell from '../Icons/bell.png';
import User from '../Icons/profile.png';
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineHome, AiFillSlackCircle } from "react-icons/ai";

import Proposals from "./Components/HomeLink/Proposals.js";
import Completed from "./Components/HomeLink/Completed.js";
import Rejected from "./Components/HomeLink/Rejected.js";
import Withdrawn from "./Components/HomeLink/Withdrawn.js";

import TACLink from "./Components/TACLink.js";
import OtherLink from "./Components/OtherLink";

import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENTID;
const API_URL = process.env.REACT_APP_API_URL;

//Modal Styles
function HomePage() {

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
        alert("Logout failed");
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
        <HomePageScreen>
            <Navbar />
            {/* This is broken down into the Side Bar and the Main Content. */}

            <HomePageContent >

                {/* Home page main content about the proposed, approved and rejected invoices. */}

                <HomePageMain>
                <HomeDashBoard>Student Activity</HomeDashBoard>
                    <HomePageActionContent>
                        <HomePageActionTabs>
                            <HomePageActionTabsInput type="radio" id="proposed" name="tabs" value="Proposed" checked={activeTab === 'Proposed'} onChange={() => handleTabChange('Proposed')} />
                            <HomePageActionTabsLabel htmlFor="proposed">Proposed</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="approved" name="tabs" value="Completed" checked={activeTab === 'Completed'} onChange={() => handleTabChange('Completed')} />
                            <HomePageActionTabsLabel htmlFor="approved">Completed</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="rejected" name="tabs" value="Rejected" checked={activeTab === 'Rejected'} onChange={() => handleTabChange('Rejected')} />
                            <HomePageActionTabsLabel htmlFor="rejected">Rejected</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="withdrawn" name="tabs" value="Withdrawn" checked={activeTab === 'Withdrawn'} onChange={() => handleTabChange('Withdrawn')} />
                            <HomePageActionTabsLabel className="with-home" htmlFor="withdrawn">Withdrawn</HomePageActionTabsLabel>

                            {(minmatches)?(
                                <HomePageActionButtons onClick={handleApplyClick}>Apply Invoice</HomePageActionButtons>
                            ):(null)
                        }
                            {/* <HomePageActionButtons onClick={testaxios}>test</HomePageActionButtons> */}
                        </HomePageActionTabs>
                        
                        { activeLink === 'Home' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <Proposals activeTab={activeTab}/>}
                                {activeTab === 'Completed' && <Completed activeTab={activeTab}/>}
                                {activeTab === 'Rejected' && <Rejected activeTab={activeTab}/>}
                                {activeTab === 'Withdrawn' && <Withdrawn activeTab={activeTab}/>}
                            </HomePageTabContent> 
                        }
                        { activeLink === 'TAC' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <TACLink />}
                                {activeTab === 'Completed' && <TACLink />}
                                {activeTab === 'Rejected' && <TACLink />}
                                {activeTab === 'Withdrawn' && <TACLink />}
                            </HomePageTabContent>
                        }
                        { activeLink === 'Other' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <OtherLink />}
                                {activeTab === 'Completed' &&  <OtherLink />}
                                {activeTab === 'Rejected' && <OtherLink />}
                                {activeTab === 'Withdrawn' &&  <OtherLink />}
                            </HomePageTabContent>
                        }
                    </HomePageActionContent>
                    {(matches)?(
                                <HomePageActionButtons onClick={handleApplyClick}>Apply Invoice</HomePageActionButtons>
                            ):(null)
                        }
                </HomePageMain>
            </HomePageContent>
        </HomePageScreen>
    );
}

export default HomePage;