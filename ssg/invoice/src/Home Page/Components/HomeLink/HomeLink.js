//Dependencies

import React, { useEffect, useState } from "react";
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

import { AiOutlineEye } from "react-icons/ai";


import axios from 'axios';
import Cookies from 'js-cookie';
const API_URL = process.env.REACT_APP_API_URL;


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
      backgroundColor: 'rgba(0, 0, 0, .5)'
    }
  };


function HomeLink() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollnumber, setRollnumber] = useState('');
    const [proposals, setProposals] = useState('');

    useEffect(() => {
        const authToken = Cookies.get('token');

        const verifyToken = async () => {
            try {
                const response = await axios.post(`${API_URL}/verifyToken`, { token: authToken });
                if (response.status === 200) {
                    setName(response.data.name);
                    setEmail(response.data.email);
                    setRollnumber(response.data.rollnumber);
                    const proposalResponse = await axios.post(`${API_URL}/proposal`, { email: response.data.email });
                    console.log(proposalResponse.data.proposal);
                    setProposals(proposalResponse.data.proposal);
                } else {
                    window.location.href = "/";
                    console.log("Unauthorized user");
                }
            } catch (error) {
                console.error('(axios) -> An error occurred:', error);
                window.location.href = '/';
            }
        };

        if (authToken) {
            console.log("*****************************");
            verifyToken();
        }
        else {
            window.location.href = "/";
        }
    },[]);

    useEffect(() => {
        console.log(proposals, '--- proposals data');
    }, [proposals]);

    console.log(name);
    console.log(email);
    console.log(rollnumber);


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

            {Array.isArray(proposals) ? (
            proposals.map((proposal, index) => (
                <HomeLinkInvoicesTable key={proposal._id}>
                    <HomeLinkInvoicesTableHeader> {index+1} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesTableHeader> {`${proposal.Title}`} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesButtonsContainer>
                        <Button variant="outlined" color="error">Withdraw</Button>
                        <AiOutlineEye id="EyeIcon" onClick={openModal} />
                    </HomeLinkInvoicesButtonsContainer>

                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <HomeLinkModal>
                            <ModalHeader>
                                <ModalHeaderTitle>{ `${proposal.Title}` }</ModalHeaderTitle>
                            </ModalHeader>
                            <ModalContent>
                                <ModalContentSection1>
                                    <ModalContentElementsSection1><i></i>TAC ID: { proposal.tac }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Date: { proposal.date }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Preffered Time: { proposal.time }</ModalContentElementsSection1>
                                </ModalContentSection1>

                                <ModalContentSection1>
                                    <ModalContentElementsSection1>Faculty Name: { proposal.faculty }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Call Time: Pending....</ModalContentElementsSection1>
                                </ModalContentSection1>

                                <ModalContentSection2>
                                    <ModalContentElementsSection1>Students:</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>{ proposal.students }</ModalContentElementsSection1>
                                </ModalContentSection2>

                                <ModalContentSection2>
                                    <ModalContentElementsSection2>Invoice Description:</ModalContentElementsSection2>
                                    <ModalContentElementsSection2>{ proposal.description }</ModalContentElementsSection2>
                                </ModalContentSection2>
                            </ModalContent>

                            <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeModal}>Close</Button>
                            </ModalButtonContainer>
                        </HomeLinkModal>
                    </Modal>
                </HomeLinkInvoicesTable>
            ))
            ) : (
                <div> No invoice Is Proposed </div>
            )
        }
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