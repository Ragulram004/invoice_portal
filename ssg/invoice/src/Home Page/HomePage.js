// Dependencies

import React from "react";

//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain } from './StylesHomePage.js';

//Components

function HomePage() {
    return (
        <HomePageScreen>
            <HomePageNavigation></HomePageNavigation>
            <HomePageContent>
                <HomePageSideBar></HomePageSideBar>
                <HomePageMain></HomePageMain>
            </HomePageContent>
        </HomePageScreen>
    );
}

export default HomePage;