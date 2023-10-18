//Dependencies

import React, { useContext, useState } from "react";
import Button from '@mui/material/Button';
import Modal from 'react-modal';


//Styles

import '../../../Styles/Invoice.css';
import { HomeLinkContent, HomeLinkInvoicesTable, HomeLinkInvoicesTableHeader, 
        HomeLinkTable, HomeLinkTableHeaderTitle, HomeLinkInvoicesButtonsContainer, 
        HomeLinkModal, ModalHeader, ModalHeaderTitle, ModalContent, ModalContentElementsSection1, 
        ModalContentSection1, ModalContentSection2, ModalContentElementsSection2, ModalButtonContainer,
         } from "../../StylesHomePage";

//Components

import { InvoiceContext } from '../../../InvoiceContext';
import { AiOutlineEye } from "react-icons/ai";


//Modal Styles

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--accent)',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      borderRadius: '5px',
      width: '50vw',
      height: '80vh',
      zIndex: '1000'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .7)'
    }
  };


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

                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <HomeLinkModal>
                            <ModalHeader>
                                <ModalHeaderTitle>{ invoice.project }</ModalHeaderTitle>
                            </ModalHeader>
                            <ModalContent>
                                <ModalContentSection1>
                                    <ModalContentElementsSection1><i></i>TAC ID: TAC-{ invoice.tac }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Date: { invoice.date }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Preffered Time: { invoice.time }</ModalContentElementsSection1>
                                </ModalContentSection1>

                                <ModalContentSection1>
                                    <ModalContentElementsSection1>Faculty Name: { invoice.faculty }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Call Time: Pending....</ModalContentElementsSection1>
                                </ModalContentSection1>

                                <ModalContentSection2>
                                    <ModalContentElementsSection1>Students:</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>{ invoice.students.join(', ') }</ModalContentElementsSection1>
                                </ModalContentSection2>

                                <ModalContentSection2>
                                    <ModalContentElementsSection2>Invoice Description:</ModalContentElementsSection2>
                                    <ModalContentElementsSection2>{ invoice.description }</ModalContentElementsSection2>
                                </ModalContentSection2>
                            </ModalContent>

                            <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeModal}>Close</Button>
                            </ModalButtonContainer>
                        </HomeLinkModal>
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