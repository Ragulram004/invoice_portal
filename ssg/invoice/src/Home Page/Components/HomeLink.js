//Dependencies

import React, { useContext, useState } from "react";
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

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

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
                        <AiOutlineEye id="EyeIcon" onClick={openModal} />
                    </HomeLinkInvoicesButtonsContainer>

                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <h1>{ invoice.project }</h1>
                        <h1>{ invoice.description }</h1>
                        <h1>{ invoice.faculty }</h1>
                        <h1>{ invoice.tac }</h1>
                        <h1>{ invoice.time }</h1>
                        <h1>{ invoice.date }</h1>
                        <h1>{invoice.students.join(', ')}</h1>
                    </Modal>
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