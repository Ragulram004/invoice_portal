// Dependencies

import React, { useState } from "react";

//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain, HomePageActionButtons, HomePageActionTabs, 
        HomePageActionContent, HomePageActionTabsInput, HomePageActionTabsLabel, HomePageTabContent, } from './StylesHomePage.js';

//Components

function HomePage() {

    const [activeTab, setActiveTab] = useState('Proposed');

    const handleTabChange = (e) => {
        setActiveTab(e);
    }

    return (
        <HomePageScreen>
            <HomePageNavigation></HomePageNavigation>
            <HomePageContent>
                <HomePageSideBar></HomePageSideBar>
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