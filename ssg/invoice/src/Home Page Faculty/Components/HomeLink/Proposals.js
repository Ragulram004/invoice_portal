//Dependencies

import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import TextField from '@mui/material/TextField';  
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; 
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import TextField from '@mui/material/TextField';


//Styles

import '../../../Styles/Invoice.css';
import { HomeLinkContent, HomeLinkInvoicesTable, HomeLinkInvoicesTableHeader, 
        HomeLinkTable, HomeLinkTableHeaderTitle, HomeLinkInvoicesButtonsContainer, 
        HomeLinkModal, ModalHeader, ModalHeaderTitle, ModalContent, ModalContentElementsSection1, 
        ModalContentSection1, ModalContentSection2, ModalContentElementsSection2, ModalButtonContainer,FacultyRejectContainer
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

const approvemodalcustomStyles = {
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

const rejectmodalcustomStyles = {
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
        height: '65vh',
        zIndex: '1000'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)'
    }
};


function Proposals({activeTab}) {

    // const [values, setValue] = useState(new Date());  

    console.log(activeTab);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollnumber, setRollnumber] = useState('');
    const [proposals, setProposals] = useState('');
    const [modal, setModal] = useState('');

    // const [value, onChange] = useState('10:00');

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
                    const proposalResponse = await axios.post(`${API_URL}/faculty-proposal`, { email: response.data.email });
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
    const [approvemodalIsOpen, setApproveModalIsOpen] = useState(false);
    const [rejectmodalIsOpen, setRejectModalIsOpen] = useState(false);
    const [modalid, setModalId] = useState(false);
    const [rejectdescription, setRejectDescription] = useState(false);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

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

    const openapproveModal = async(_id) => {
        setApproveModalIsOpen(true);
        setModalId(_id);
        console.log("Modal Opened");
        console.log(_id);
    }

    const openrejectModal = async(_id) => {
        setRejectModalIsOpen(true);
        setModalId(_id);
        console.log("Modal Opened");
        console.log(_id);
    }

    // const Withdraw = async(Title,_id) => {
    //     const response = await axios.post(`${API_URL}/faculty-withdraw`, {Status: Title, id: _id});
    //     if (response.status === 200) {
    //         console.log('Data saved successfully');
    //         } else {
    //             console.log(response);
    //             console.error('Failed to save data');
    //     }}
        
    // const Reject = async(Title,_id) => {
    //     const response = await axios.post(`${API_URL}/faculty-reject`, {Status: Title, id: _id});
    //     if (response.status === 200) {
    //         console.log('Data saved successfully');
    //         } else {
    //             console.log(response);
    //             console.error('Failed to save data');
    //     }}

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const closeapproveModal = () => {
        console.log("Close Approve Modal");
        setApproveModalIsOpen(false);
        setModalId('');
    }

    const closerejectModal = () => {
        console.log("Close Reject Modal");
        setRejectModalIsOpen(false);
        setModalId('');
    }

    const handlereject = async() => {
        const response = await axios.post(`${API_URL}/faculty-rejecteddescription`, {id: modalid, description: rejectdescription});
        if (response.status === 200) {
            console.log('Data Updated successfully');
            window.location.reload();
            // console.log("Close Reject Modal");
            // setRejectModalIsOpen(false);
            // setModalId('');
        } else {
                console.log(response);
                console.error('Failed to update the data, CallTime Updation error');
        }
    }

    const handleAccept = async(time) => {
        console.log(time);
        const selectedTime = time;
        const formattedTime = selectedTime.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const response = await axios.post(`${API_URL}/faculty-calltime`, {id: modalid, time: formattedTime});
        if (response.status === 200) {
            console.log('Data Updated successfully');
            window.location.reload();
        } else {
                console.log(response);
                console.error('Failed to update the data, CallTime Updation error');
        }
        console.log(formattedTime);
        console.log("On Accept");
        setApproveModalIsOpen(false);
    }

    return (
        <HomeLinkContent>
            <HomeLinkTable>
                <HomeLinkTableHeaderTitle>ID</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>Project Name</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle className="grid-prog">View</HomeLinkTableHeaderTitle>
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
                    <HomeLinkInvoicesButtonsContainer>
                        {/* <Button variant="outlined" onClick={() => Withdraw(proposal.Title,proposal._id)} color="success">approve</Button>
                        <Button variant="outlined" onClick={() => Reject(proposal.Title,proposal._id)} color="error">reject</Button> */}
                        <Button  onClick={() => openapproveModal(proposal._id)} color="success">approve</Button>
                        <Button  onClick={() => openrejectModal(proposal._id)} color="error">reject</Button>
                    </HomeLinkInvoicesButtonsContainer>

                    
                    {modalIsOpen && <Modal isOpen={modalIsOpen} style={customStyles}>
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
                                    <ModalContentElementsSection1>Faculty Name: { modal.FacultyName.label }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>Call Time: Pending....</ModalContentElementsSection1>
                                </ModalContentSection1>

                                <ModalContentSection2> 
                                    <ModalContentElementsSection1>Students:</ModalContentElementsSection1>
                                    <ModalContentElementsSection1>{ 
                                    Object.keys(modal.StudentName).map((key, index) => (
                                        <div key={index}>
                                            <ModalContentElementsSection1>{modal.StudentName[key].label}</ModalContentElementsSection1>
                                        </div>
                                    ))
                                    }</ModalContentElementsSection1>
                                </ModalContentSection2>

                                <ModalContentSection2>
                                    <ModalContentElementsSection2>Invoice Description:</ModalContentElementsSection2>
                                    <ModalContentElementsSection2>{ modal.Description }</ModalContentElementsSection2>
                                </ModalContentSection2>
                            </ModalContent>

                            <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeModal}>Close</Button>
                            </ModalButtonContainer>
                        </HomeLinkModal>
                        {/* ))} */}
                    
                    </Modal>}
                {approvemodalIsOpen && 
                    <Modal isOpen={approvemodalIsOpen} style={approvemodalcustomStyles}>
                        <ModalHeader>
                                <ModalHeaderTitle>{ modalid }</ModalHeaderTitle>
                            </ModalHeader>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} onAccept={handleAccept}/>
                        </LocalizationProvider>

                        <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeapproveModal}>Close</Button>
                            </ModalButtonContainer>
                    </Modal>}
                {rejectmodalIsOpen &&
                    <Modal isOpen={rejectmodalIsOpen} style={rejectmodalcustomStyles}>
                {/* {approvemodalIsOpen && 
                    <Modal isOpen={approvemodalIsOpen} style={approvemodalcustomStyles}> */}
                        <ModalHeader>
                                <ModalHeaderTitle>{ modalid }</ModalHeaderTitle>
                            </ModalHeader>
                            <FacultyRejectContainer>
                            <TextField
                                    required={true}
                                    label="Reject Description"
                                    onChange={ (e) => setRejectDescription(e.target.value) }
                            />
                            </FacultyRejectContainer>
                        <ModalButtonContainer>
                                <Button variant="outlined" color="success" onClick={handlereject}>Submit</Button>
                                <Button variant="outlined" color="error" onClick={closerejectModal}>Close</Button>
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