//Dependencies

import React from "react";

//Styles

import '../../Styles/Invoice.css';
import { OtherLinkContent, OtherLinkTable, OtherLinkTableHeaderTitle } from "../StylesHomePage";

//Components


function OtherLink() {
    return (
        <OtherLinkContent>
            <OtherLinkTable>
                <OtherLinkTableHeaderTitle>ID</OtherLinkTableHeaderTitle>
                <OtherLinkTableHeaderTitle>Project Name</OtherLinkTableHeaderTitle>
                <OtherLinkTableHeaderTitle>Progress</OtherLinkTableHeaderTitle>
            </OtherLinkTable>
        </OtherLinkContent>
    );
}

export default OtherLink;