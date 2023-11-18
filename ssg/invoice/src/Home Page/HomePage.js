// Dependencies

import React, { useState } from "react";
import Cookies from 'js-cookie';
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Select from "react-select";


//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain, HomePageActionButtons, HomePageActionTabs, 
        HomePageActionContent, HomePageActionTabsInput, HomePageActionTabsLabel, HomePageTabContent,
        HomePageNavigationLogo, HomePageNavigationTitle, HomePageNavigationSearch,
        HomePageNavigationDN,
        HomePageNavigationDNInput,
        HomePageNavigationNotification,
        HomePageNavigationProfile,
        HomePageSideBarSeperation,
        HomePageSideBarButton,
        HomePageSideBarSeperationBottom,
        LogoutBoxButton, LogoutBoxHighlight} from './StylesHomePage.js';

//Components

import Logo from '../Icons/BITLogo.png';
import { IoNotificationsOutline } from "react-icons/io5";
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
    
    return (
        <HomePageScreen>

            {/* Navigation Bar */}

            <HomePageNavigation>

                {/* Navigation Bar Logo */}

                <HomePageNavigationLogo src={Logo} alt="BIT Logo" />

                {/* Navigation Bar Title */}

                <HomePageNavigationTitle>BIT INVOICE PORTAL</HomePageNavigationTitle>

                {/* Navigation Bar Search functionality box */}

                <HomePageNavigationSearch>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                    <Select options={[]} onKeyDown={handleKeyDown} />
                    </Stack>
                </HomePageNavigationSearch>

                {/* Theme toogle functionality switch */}

                <HomePageNavigationDN for="switch">
                    <HomePageNavigationDNInput id="switch" type="checkbox" />

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
                </HomePageNavigationDN>

                {/* Natification bell constainer */}

                <HomePageNavigationNotification>
                    <IoNotificationsOutline id="NotificationBell" />
                </HomePageNavigationNotification>

                {/* Profile Avatar */}

                <HomePageNavigationProfile>
                    <RxAvatar id="ProfileAvatar" />
                </HomePageNavigationProfile>
            </HomePageNavigation>

            {/* Below the Navigation Bar is the Home Page Content. */}
            {/* This is broken down into the Side Bar and the Main Content. */}

            <HomePageContent>

                {/* Home page side bar with the navigation links. */}

                <HomePageSideBar>

                    {/* Home page side bar navigation links. */}

                    <HomePageSideBarSeperation>

                        {/* Showing the navigation links for the Home Page Side Bar. */}
                        <HomePageSideBarButton onClick={ () => handleLinkChange('Home') }>
                            <AiOutlineHome id="SideBarHomeIcon" />
                            Home
                        </HomePageSideBarButton>

                        {/* Showing the Invoices related to TAC */}

                        <HomePageSideBarButton onClick={ () => handleLinkChange('TAC') }>
                            <AiFillSlackCircle id="SideBarHomeIcon" />
                            TAC
                        </HomePageSideBarButton>

                        {/* Showing the Invoices related to Other events */}

                        <HomePageSideBarButton onClick={ () => handleLinkChange('Other') }>
                            <AiFillSlackCircle id="SideBarHomeIcon" />
                            Other
                        </HomePageSideBarButton>
                    </HomePageSideBarSeperation>

                    {/* Home page side bar logout button. */}

                    <HomePageSideBarSeperationBottom>
                    <LogoutBoxButton>
                        <LogoutBoxHighlight>
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={() => onSuccess()}
                            onFailure={() => onFailure()}
                        />
                        </LogoutBoxHighlight>
                        </LogoutBoxButton>
                    </HomePageSideBarSeperationBottom>
                </HomePageSideBar>

                {/* Home page main content about the proposed, approved and rejected invoices. */}

                <HomePageMain>
                    <HomePageActionContent>
                        <HomePageActionTabs>
                            <HomePageActionTabsInput type="radio" id="proposed" name="tabs" value="Proposed" checked={activeTab === 'Proposed'} onChange={() => handleTabChange('Proposed')} />
                            <HomePageActionTabsLabel htmlFor="proposed">Proposed</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="approved" name="tabs" value="Completed" checked={activeTab === 'Completed'} onChange={() => handleTabChange('Completed')} />
                            <HomePageActionTabsLabel htmlFor="approved">Completed</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="rejected" name="tabs" value="Rejected" checked={activeTab === 'Rejected'} onChange={() => handleTabChange('Rejected')} />
                            <HomePageActionTabsLabel htmlFor="rejected">Rejected</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="withdrawn" name="tabs" value="Withdrawn" checked={activeTab === 'Withdrawn'} onChange={() => handleTabChange('Withdrawn')} />
                            <HomePageActionTabsLabel htmlFor="withdrawn">Withdrawn</HomePageActionTabsLabel>

                            <HomePageActionButtons onClick={handleApplyClick}>Apply Invoice</HomePageActionButtons>
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
                </HomePageMain>
            </HomePageContent>
        </HomePageScreen>
    );
}

export default HomePage;