//Dependencies

import React, { useContext } from "react";
import Button from '@mui/material/Button';
import Modal from 'react-modal';


//Styles

import '../../Styles/Invoice.css';
import { HomeLinkContent, HomeLinkInvoicesTable, HomeLinkInvoicesTableHeader, 
        HomeLinkTable, HomeLinkTableHeaderTitle, HomeLinkInvoicesButtonsContainer,
         } from "../StylesHomePage";

//Components

import { InvoiceContext } from '../../InvoiceContext';
import { AiOutlineEye } from "react-icons/ai";


function HomeLink() {

    const { invoices } = useContext(InvoiceContext);

    return (
        <HomeLinkContent>
            <HomeLinkTable>
                <HomeLinkTableHeaderTitle>ID</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>Project Name</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>Progress</HomeLinkTableHeaderTitle>
            </HomeLinkTable>

            {invoices.map((invoice, index) => (
                <HomeLinkInvoicesTable key={index}>
                    <HomeLinkInvoicesTableHeader> {index+1} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesTableHeader> { invoice.project } </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesButtonsContainer>
                        <Button variant="outlined" color="error">Withdraw</Button>
                        <AiOutlineEye id="EyeIcon" />
                    </HomeLinkInvoicesButtonsContainer>
                </HomeLinkInvoicesTable>
            ))}
        </HomeLinkContent>
    );
}

export default HomeLink;



// {invoices.map((invoice, index) => (
                
//     <div key={index}>
//     {/* Display the invoice information here */}
//     {/* For example: */}
//     {/* <div>Students: {invoice.students.join(', ')}</div> */}
//     <div>Project: {invoice.project}</div>
//     {/* <div>Description: {invoice.description}</div>
//     <div>Faculty: {invoice.faculty}</div> */}
//     {/* ... (Other fields) */}
//     </div>
// ))}