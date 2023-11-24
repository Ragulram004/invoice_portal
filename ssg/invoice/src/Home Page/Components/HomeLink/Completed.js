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
      height: '62vh',
      zIndex: '1000'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .5)'
    }
  };


function Completed({activeTab}) {

    console.log(activeTab);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollnumber, setRollnumber] = useState('');
    const [proposals, setCompleted] = useState('');
    const [modal, setModal] = useState('');

    useEffect(() => {
        if(activeTab === 'Proposed') {
            console.log("HomeLink is active");
        }
        const authToken = Cookies.get('token');

        const verifyToken = async () => {
            try {
                const response = await axios.post(`${API_URL}/verifyToken`, { token: authToken });
                if (response.status === 200) {
                    setName(response.data.name);
                    setEmail(response.data.email);
                    setRollnumber(response.data.rollnumber);

                    //axcessing the withdrwan proposals
                    const withdrawResponse = await axios.post(`${API_URL}/completed`, { email: response.data.email });
                    console.log(withdrawResponse.data.completed);
                    setCompleted(withdrawResponse.data.completed);
                } else {
                    // window.location.href = "/";
                    console.log("Unauthorized user");
                }
            } catch (error) {
                console.error('(axios) -> An error occurred:', error);
                // window.location.href = '/';
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

    const openModal = async(_id) => {
        console.log("Modal Opened");
        console.log(_id);
        const modalResponse = await axios.post(`${API_URL}/modal`, {id:_id});
        // console.log(modalResponse.data);
        await setModal(modalResponse.data.modaldata);
        await console.log(modal.StudentName);
        await console.log(modal.StudentName['name']);
        await setModalIsOpen(true);
    }

    const Withdraw = async(Title,_id) => {
        const response = await axios.post(`${API_URL}/withdraw`, {Status: Title, id: _id});
        if (response.status === 200) {
            console.log('Data saved successfully');
            } else {
                console.log(response);
                console.error('Failed to save data');
        }}

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
                    <HomeLinkInvoicesTableHeader> {proposal.Title} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesButtonsContainer>
                        <AiOutlineEye id="EyeIcon" onClick={() => openModal(proposal._id)} />
                    </HomeLinkInvoicesButtonsContainer>

                    
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                    {/* {modal.map((modal, index) => ( */}
                        <HomeLinkModal>
                            <ModalHeader>
                                <ModalHeaderTitle>{ modal.Title }</ModalHeaderTitle>
                            </ModalHeader>
                            <ModalContent>
                                <ModalContentSection1>
                                    <ModalContentElementsSection1><i></i>TAC ID: { modal.TacId }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Date: { modal.Date }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Preffered Time: { modal.Time }</ModalContentElementsSection1>
                                </ModalContentSection1>

                                <ModalContentSection1>
                                    <ModalContentElementsSection1>Faculty Name: { modal.FacultyName }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Call Time: Pending....</ModalContentElementsSection1>
                                </ModalContentSection1>

                                <ModalContentSection2>
                                    <ModalContentElementsSection1>Students:</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>{ modal.StudentName }</ModalContentElementsSection1>
                                </ModalContentSection2>

                                <ModalContentSection2>
                                    <ModalContentElementsSection2>Invoice Description:</ModalContentElementsSection2>
                                    <ModalContentElementsSection2>{ modal.description }</ModalContentElementsSection2>
                                </ModalContentSection2>
                            </ModalContent>

                            <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeModal}>Close</Button>
                            </ModalButtonContainer>
                        </HomeLinkModal>
                        {/* ))} */}
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

export default Completed;