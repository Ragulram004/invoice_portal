//Dependencies

import React from "react";

//Styles

import '../../Styles/Invoice.css';
import { HomeLinkContent, HomeLinkTable, HomeLinkTableHeaderTitle } from "../StylesHomePage";

//Components


function HomeLink() {
    return (
        <HomeLinkContent>
            <HomeLinkTable>
                <HomeLinkTableHeaderTitle>ID</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>Project Name</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>Progress</HomeLinkTableHeaderTitle>
            </HomeLinkTable>
        </HomeLinkContent>
    );
}

export default HomeLink;