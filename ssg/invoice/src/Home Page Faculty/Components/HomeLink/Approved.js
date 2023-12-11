//Dependencies

import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import Switch from '@mui/material/Switch';


//Styles

import '../../../Styles/Invoice.css';
import { HomeLinkContent, HomeLinkInvoicesTable, HomeLinkInvoicesTableHeader, 
        HomeLinkTable, HomeLinkTableHeaderTitle, HomeLinkInvoicesButtonsContainer, 
        HomeLinkModal, ModalHeader, ModalHeaderTitle, ModalContent, ModalContentElementsSection1, 
        ModalContentSection1, ModalContentSection2, ModalContentElementsSection2, ModalButtonContainer,AlignItemContainer
        ,Noinvoice} from "../../StylesHomePage";

//Components

import { AiOutlineEye } from "react-icons/ai";
import TextField from '@mui/material/TextField';
import Select from 'react-select';


import axios from 'axios';
import Cookies from 'js-cookie';
import { Stack } from "@mui/material";
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

const worklogmodalcustomStyles = {
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

function Approved({activeTab}) {

    console.log(activeTab);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollnumber, setRollnumber] = useState('');
    const [proposals, setWithdrawn] = useState('');
    const [modal, setModal] = useState('');

    const [isInputEnabled, setInputEnabled] = useState(false);

    const handleToggleChange = () => {
        setInputEnabled(!isInputEnabled);
    };

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
                    const withdrawResponse = await axios.post(`${API_URL}/faculty-approved`, { email: response.data.email });
                    console.log(withdrawResponse.data.approved);
                    setWithdrawn(withdrawResponse.data.approved);

                    // axcessing the active proposals
                    // const proposalResponse = await axios.post(`${API_URL}/proposal`, { email: response.data.email });
                    // console.log(proposalResponse.data.proposal);
                    // setProposals(proposalResponse.data.proposal);
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
    const [worklogmodalIsOpen, setWorklogModalIsOpen] = useState(false);
    const [worklogdescription, setWorklogDescription] = useState('');
    const [modaltitle, setModalTitle] = useState('');
    const [modalid, setModalId] = useState(false);
    const [systemInput, setSystemInput] = useState('');
    const [searchResultSystems, setSearchResultSystems] = useState([]);
    const [systemnumber, setSystemNumber] = useState('');

    useEffect(() => {
        console.log(systemInput);
        const fetchDataSystems = async () => {
            console.log("hello");
            // setSearchResultSystems([['abcd'], ['efgh'], ['ijkl']]);
            try {
                console.log('Sending data...');
                const response = await axios.post(`${API_URL}/faculty-system-number`, {systemnumber: systemnumber});
                console.log(response.data);
                    let tempfaculty = [];
                    for (let i = 0; i < response.data.length; i++) {
                        const label = response.data[i].systemnumber;
                        const value = response.data[i]._id;
                        tempfaculty = [...tempfaculty, { label, value }];
                    }
                    setSearchResultSystems(tempfaculty);
            }
            catch (error) {
                console.error('(axios) -> An error occurred:', error);
            }
        };

        if (systemInput.length > 0){
        fetchDataSystems();}
    }, [systemInput]);  

    const openModal = async(_id) => {
        console.log("Modal Opened");
        console.log(_id);
        const modalResponse = await axios.post(`${API_URL}/modal`, {id:_id});
        // console.log(modalResponse.data);
            let model = await setModal(modalResponse.data.modaldata);
        // await console.log(modal.StudentName);
        // await console.log(modal.StudentName['name']);
        await setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
        setModalTitle('');
    }

    const openWorklogModal = (id,Title) => {
        setModalId(id);
        setModalTitle(Title);
        setWorklogModalIsOpen(true);
    }

    const handlemodalsubmit = async() => {
        console.log(systemnumber);
        if(worklogdescription !== '' && ((isInputEnabled === false && systemnumber === '') || (isInputEnabled === true && systemnumber !== ''))){
            const wWorklogResponse = await axios.post(`${API_URL}/faculty-worklog`, { email: email , worklog: worklogdescription, modalid: modalid, systemnumber: systemnumber});
        console.log(wWorklogResponse.data.message);
        if (wWorklogResponse.status === 200) {
            console.log('Data saved successfully');
            window.location.reload();
        } else {
            console.log(wWorklogResponse);
            console.log(wWorklogResponse.status);
            console.error('Failed to save data');
        }}
        else{
            console.log(worklogdescription);
            console.log(isInputEnabled);
            console.log(systemnumber);
            console.log("Please Select a system number and worklog description");
            window.alert("Please Select a system number and worklog description");
        }
    }

    const closworklogtModal = () => {
        setWorklogModalIsOpen(false);
        setModalId('');
        setModalTitle('');
    } 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    const handleInputChange = newValue => {
        console.log(newValue);
        setSystemInput(newValue)
        // setSearchResultSystems(newValue);
    }

    const handleSelectChange = (selectedOption) => {
        console.log(selectedOption.label);
        
        setSystemNumber(selectedOption.label);
        console.log(selectedOption.label);
    }

    return (
        <HomeLinkContent>
            <HomeLinkTable>
                <HomeLinkTableHeaderTitle>ID</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>Project Name</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>Progress</HomeLinkTableHeaderTitle>
                <HomeLinkTableHeaderTitle>View</HomeLinkTableHeaderTitle>

            </HomeLinkTable>

            {Array.isArray(proposals) && (proposals.length !== 0) ? (
            proposals.map((proposal, index) => (
                <HomeLinkInvoicesTable key={proposal._id}>
                    <HomeLinkInvoicesTableHeader> {index+1} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesTableHeader> {proposal.Title} </HomeLinkInvoicesTableHeader>
                    <HomeLinkInvoicesButtonsContainer>
                    <Button  onClick={() => openWorklogModal(proposal._id,proposal.Title)} color="success">Worklog</Button>
                    </HomeLinkInvoicesButtonsContainer>
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
                                    <ModalContentElementsSection1><span>Invoice Description:</span><br /></ModalContentElementsSection1>
                                    <ModalContentElementsSection1 className="to-right">{ modal.Description }</ModalContentElementsSection1>
                                </ModalContentSection1>
                            <ModalButtonContainer>
                                <Button variant="outlined" color="error" onClick={closeModal}>Close</Button>
                            </ModalButtonContainer>
                    </HomeLinkModal>
                        {/* ))} */}
                    </Modal>}
                    {worklogmodalIsOpen &&
                    <Modal isOpen={worklogmodalIsOpen} style={worklogmodalcustomStyles}>
                        <ModalHeader>
                                <ModalHeaderTitle>{ modaltitle }</ModalHeaderTitle>
                        </ModalHeader>
                            <AlignItemContainer>
                            <h4>Worklog Description</h4>
                            <textarea className="Worklog-input"
                                    placeholder="Worllog Description"
                                    required={true}
                                    label="Worklog Description"
                                    onChange={ (e) => setWorklogDescription(e.target.value) }
                            />
                            {/* <Select isDisabled={true} options={searchResultsStudent} onInputChange={handleInputChange} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChange(selectedOption,field.id)} placeholder={`${name}`} />   */}
                            <h4>system no</h4>
                            <Stack spacing={1} sx={{ width: '75%'}}>
                                    <Select 
                                    // isDisabled={!isInputEnabled}  
                                    options={searchResultSystems} 
                                    onInputChange={handleInputChange} 
                                    onKeyDown={handleKeyDown} 
                                    onChange={(selectedOption) => handleSelectChange(selectedOption)} 
                                    isRequired={true} required 
                                    /> 
                                {/* <Switch
                                    checked={isInputEnabled}
                                    onChange={handleToggleChange}
                                    color="primary"
                                /> */}
                                </Stack>
                            </AlignItemContainer>
                        <ModalButtonContainer>
                                <Button variant="outlined" color="success" onClick={handlemodalsubmit}>Submit</Button>
                                <Button variant="outlined" color="error" onClick={closworklogtModal}>Close</Button>
                        </ModalButtonContainer>
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

export default Approved;