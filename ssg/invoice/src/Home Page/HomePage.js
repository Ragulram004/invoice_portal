// Dependencies

import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain, HomePageActionButtons, HomePageActionTabs, 
        HomePageActionContent, HomePageActionTabsInput, HomePageActionTabsLabel, HomePageTabContent,
        HomePageNavigationLogo, HomePageNavigationTitle, HomePageNavigationSearch, 
        HomePageNavigationSearchBox, HomePageNavigationSearchField,
        HomePageNavigationSearchInput,
        HomePageNavigationDN,
        HomePageNavigationDNInput,
        HomePageNavigationNotification,
        HomePageNavigationProfile} from './StylesHomePage.js';

//Components

import Logo from '../Icons/BITLogo.png';
import { IoNotificationsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";


function HomePage() {

    useEffect(() => {
            const authToken = Cookies.get('token');

                if (!authToken) {
                    window.location.href = '/';
                    return;
                };
            });

    const [activeTab, setActiveTab] = useState('Proposed');

    const handleTabChange = (e) => {
        setActiveTab(e);
    }

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
                    <HomePageNavigationSearchBox>
                        <HomePageNavigationSearchField>
                            <HomePageNavigationSearchInput placeholder="Search for invoice..." type="text"/>
                        </HomePageNavigationSearchField>
                    </HomePageNavigationSearchBox>
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
            <HomePageContent>
                <HomePageSideBar></HomePageSideBar>

                {/* Home page main content about the proposed, approved and rejected invoices. */}

                <HomePageMain>
                    <HomePageActionContent>
                        <HomePageActionTabs>
                            <HomePageActionTabsInput type="radio" id="proposed" name="tabs" value="Proposed" checked={activeTab === 'Proposed'} onChange={() => handleTabChange('Proposed')} />
                            <HomePageActionTabsLabel htmlFor="proposed">Proposed</HomePageActionTabsLabel>
                            <HomePageActionTabsInput type="radio" id="approved" name="tabs" value="Approved" checked={activeTab === 'Approved'} onChange={() => handleTabChange('Approved')} />
                            <HomePageActionTabsLabel htmlFor="approved">Approved</HomePageActionTabsLabel>
                            <HomePageActionTabsInput type="radio" id="rejected" name="tabs" value="Rejected" checked={activeTab === 'Rejected'} onChange={() => handleTabChange('Rejected')} />
                            <HomePageActionTabsLabel htmlFor="rejected">Rejected</HomePageActionTabsLabel>

                            <HomePageActionButtons>Apply Invoice</HomePageActionButtons>
                        </HomePageActionTabs>
                        
                        <HomePageTabContent>
                            {activeTab === 'Proposed' && <div>Proposed</div>}
                            {activeTab === 'Approved' && <div>Approved</div>}
                            {activeTab === 'Rejected' && <div>Rejected</div>}
                        </HomePageTabContent>
                    </HomePageActionContent>
                </HomePageMain>
            </HomePageContent>
        </HomePageScreen>
    );
}

export default HomePage;