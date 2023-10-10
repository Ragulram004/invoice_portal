// Dependencies

import React, { useState } from "react";

//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain, HomePageAction, HomePageActionButtons, HomePageActionTabs, 
        HomePageActionContent, HomePageTabConatainer, HomePageTab} from './StylesHomePage.js';

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
                    <HomePageAction>
                        <HomePageActionButtons>Apply Invoice</HomePageActionButtons>
                    </HomePageAction>
                    <HomePageActionContent>
                        <HomePageActionTabs>
                            <HomePageTabConatainer>
                                <HomePageTab></HomePageTab>
                            </HomePageTabConatainer>
                        </HomePageActionTabs>
                    </HomePageActionContent>
                </HomePageMain>
            </HomePageContent>
        </HomePageScreen>
    );
}

export default HomePage;