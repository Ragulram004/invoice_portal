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
        Noinvoice} from "../../StylesHomePage";

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
        // await console.log(modal.StudentName);
        // await console.log(modal.StudentName['name']);
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
                <HomeLinkTableHeaderTitle>View</HomeLinkTableHeaderTitle>
            </HomeLinkTable>

            {Array.isArray(proposals) && (proposals.length !== 0) ? (
            proposals.map((proposal, index) => (
                <HomeLinkInvoicesTable key={proposal._id}>
                    <HomeLinkInvoicesTableHeader> {index+1} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesTableHeader> {proposal.Title} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesButtonsContainer>
                        <AiOutlineEye id="EyeIcon" onClick={() => openModal(proposal._id)} />
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
                                    {modal.Date.split('T')[0]}</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="grid1"><span>Preffered Time: </span>{ modal.Time }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="grid1"><span>Faculty Name: </span>{ modal.FacultyName.label }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="grid1"><span>Call Time: </span>{ modal.CallTime ? modal.CallTime.split('T')[1].slice(0, 8) : <>Pending....</>}</ModalContentElementsSection1>
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
                                    <ModalContentElementsSection1><span>Invoice Description:</span></ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="to-right">{ modal.Description }</ModalContentElementsSection1>
                                    <ModalContentElementsSection1><span>Worklog Description:</span></ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="to-right">{ modal.Worklog }</ModalContentElementsSection1>
                                </ModalContentSection1>
                            <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeModal}>Close</Button>
                            </ModalButtonContainer>
                        </HomeLinkModal>
                        {/* ))} */}
                    
                    </Modal>}
                </HomeLinkInvoicesTable>
            ))
            ) : (
                <Noinvoice>No Invoice Is Proposed</Noinvoice>
            )
        }
        </HomeLinkContent>
    );
}

export default Completed;