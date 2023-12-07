//Dependencies

import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Modal from 'react-modal';

import { TextField } from "@mui/material";

//Styles

import '../../../Styles/Invoice.css';
import { HomeLinkContent, HomeLinkInvoicesTable, HomeLinkInvoicesTableHeader, 
        HomeLinkTable, HomeLinkTableHeaderTitle, HomeLinkInvoicesButtonsContainer, 
        HomeLinkModal, ModalHeader, ModalHeaderTitle, ModalContent, ModalContentElementsSection1, 
        ModalContentSection1, ModalContentSection2, ModalContentElementsSection2, ModalButtonContainer,AlignItemContainer
         } from "../../StylesHomePage";

//Components

import { AiOutlineEye } from "react-icons/ai";


import axios from 'axios';
import Cookies from 'js-cookie';
import mediaquery from "mediaquery";
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
        width: window.innerWidth > 768 ? '50%' : '80%',
        height: '65vh',
        zIndex: '1000',

      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)'
      }
  };
  const updateWidthBasedOnWindowSize = () => {
    customStyles.content.width = window.innerWidth > 768 ? '50%' : '80%';
  };
  
  // Call the function initially and listen for window resize events
  updateWidthBasedOnWindowSize();
  window.addEventListener('resize', updateWidthBasedOnWindowSize);

function Proposals({activeTab}) {

    console.log(activeTab);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollnumber, setRollnumber] = useState('');
    const [proposals, setProposals] = useState('');
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

                    // axcessing the active proposals
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

    const openModal = async(_id) => {
        console.log("Modal Opened");
        console.log(_id);
        const modalResponse = await axios.post(`${API_URL}/modal`, {id:_id});
        console.log("@@@@@@@@@@@@@@@@@@");
        console.log(modalResponse.data.modaldata.StudentName);
        console.log("&&&&&&&&&&&&&&&&&");
        console.log(modalResponse.data.modaldata.FacultyName.label);
        console.log("@@@@@@@@@@@@@@@@@@");
        
        await setModal(modalResponse.data.modaldata);
        await console.log(modal.StudentName);
        // await console.log(modal.StudentName['name']);
        await setModalIsOpen(true);
    }

    const [withdrawmodalIsOpen, setWithdrawModalIsOpen] = useState(false);
    const [modaltitle, setModalTitle] = useState('');
    const [modalid, setModalId] = useState('');
    const [withdrawdescription, setwithdrawDescription] = useState('');

    const closewithdrawModal = () => {
        console.log("Close Reject Modal");
        setWithdrawModalIsOpen(false);
        setModalId('');
        setModalTitle('');
    }

    const openWithdrawModal = async(Title,_id) => {
        setWithdrawModalIsOpen(true);
        setModalTitle(Title);
        setModalId(_id);
        console.log("Modal Opened");
        console.log(_id);
    }

    const handleWithdraw = async() => {
            if (withdrawdescription === '') {
                window.alert("Please enter the reject description");
                console.log("Please enter the reject description");
            } else{

        const response = await axios.post(`${API_URL}/withdraw`, {Status: modaltitle, id: modalid, Description: withdrawdescription});
        if (response.status === 200) {
            console.log('Data saved successfully');
            window.location.href = '/home'
        } else {
                console.log(response);
                console.error('Failed to save data');
        }}}

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <HomeLinkContent>
            <HomeLinkTable>
                <HomeLinkTableHeaderTitle className="grid-id">ID</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle className="grid-proname">Project Name</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle className="grid-prog">View</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle className="grid-view">Progress</HomeLinkTableHeaderTitle>
            </HomeLinkTable>
            {Array.isArray(proposals) && (proposals.length !== 0) ? (
            proposals.map((proposal, index) => (
                <HomeLinkInvoicesTable key={proposal._id}>
                    <HomeLinkInvoicesTableHeader> {index+1} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesTableHeader> {proposal.Title} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesButtonsContainer>

                    {/* {proposal.Status === "Approved" && */}
                        {/* <Button variant="outlined" onClick={() => openWithdrawModal(proposal.Title,proposal._id)} color="success">Accept</Button>} */}
                    {/* {{ 
                                    Object.keys(modal.StudentData).map((key, index) => (
                                        <div key={index}>
                                            <ModalContentElementsSection1>{modal.StudentData[key].label}</ModalContentElementsSection1>
                                        </div>
                                    ))
                                    } &&
                        <Button variant="outlined" onClick={() => Withdraw(proposal.Title,proposal._id)} color="success">Accept</Button>} */}
                        {/* <Button variant="outlined" onClick={() => openWithdrawModal(proposal.Title,proposal._id)} color="error">Withdraw</Button> */}
                        <AiOutlineEye id="EyeIcon" onClick={() => openModal(proposal._id)} />
                    </HomeLinkInvoicesButtonsContainer>
                    <HomeLinkInvoicesButtonsContainer>
                         <Button  onClick={() => openWithdrawModal(proposal.Title,proposal._id)} color="error">Delete</Button>
                    </HomeLinkInvoicesButtonsContainer>
                    
                    {modalIsOpen && <Modal isOpen={modalIsOpen} style={customStyles}>
                    {/* {modal.map((modal, index) => ( */}
                        <HomeLinkModal>
                            <ModalHeader>
                                <ModalHeaderTitle>{ modal.Title }</ModalHeaderTitle>
                            </ModalHeader>
                                <ModalContentSection1 className = "eye-contant">
                                    <ModalContentElementsSection1 className="grid1"><span>TAC ID: </span> { modal.TacId }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="grid1"><span>Date: </span>
                                    { modal.Date }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="grid1"><span>Preffered Time: </span>{ modal.Time }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="grid1"><span>Faculty Name: </span>{ modal.FacultyName.label }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="grid1"><span>Call Time: </span>{ modal.CallTime ? modal.CallTime : <>Pending....</>}</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 ><span>Students:</span>
                                    <ModalContentElementsSection1 className="stu-grid">
                                    { 
                                    Object.keys(modal.StudentData).map((key, index) => (
                                        <div key={index}>
                                            <ModalContentElementsSection1 className="student">{modal.StudentData[key].label}</ModalContentElementsSection1>
                                        </div>
                                    ))
                                    }
                                    </ModalContentElementsSection1>
                                    </ModalContentElementsSection1>
                                    <ModalContentElementsSection1><span>Invoice Description:</span><br /></ModalContentElementsSection1>
                                    <ModalContentElementsSection1>{ modal.Description }</ModalContentElementsSection1>
                                </ModalContentSection1>
                            <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeModal}>Close</Button>
                            </ModalButtonContainer>
                        </HomeLinkModal>
                        {/* ))} */}
                    </Modal>}
                    {withdrawmodalIsOpen &&
                    <Modal isOpen={withdrawmodalIsOpen} style={customStyles}>
                        <ModalHeader>
                                <ModalHeaderTitle>{ modaltitle }</ModalHeaderTitle>
                            </ModalHeader>
                            <AlignItemContainer>
                            <TextField
                                    required={true}
                                    label="Withdrawn Description"
                                    onChange={ (e) => setwithdrawDescription(e.target.value) }
                            />
                            </AlignItemContainer>
                        <ModalButtonContainer>
                                <Button variant="outlined" color="success" onClick={handleWithdraw}>Submit</Button>
                                <Button variant="outlined" color="error" onClick={closewithdrawModal}>Close</Button>
                            </ModalButtonContainer>
                    </Modal>}
                </HomeLinkInvoicesTable>
            ))
            ) : (
                <div> No invoice Is Proposed </div>
            )
        }
        </HomeLinkContent>
    );
}

export default Proposals;