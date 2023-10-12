//Dependencies

import React from "react";

//Styles

import '../../Styles/Invoice.css';
import { TACLinkContent, TACLinkTable, TACLinkTableHeaderTitle } from "../StylesHomePage";

//Components


function TACLink() {
    return (
        <TACLinkContent>
            <TACLinkTable>
                <TACLinkTableHeaderTitle>TAC ID</TACLinkTableHeaderTitle>
                <TACLinkTableHeaderTitle>Project Name</TACLinkTableHeaderTitle>
                <TACLinkTableHeaderTitle>Progress</TACLinkTableHeaderTitle>
            </TACLinkTable>
        </TACLinkContent>
    );
}

export default TACLink;