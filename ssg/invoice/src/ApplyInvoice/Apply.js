//Dependencies

import React, { useState, useEffect, useContext } from "react";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';

import Button from "@mui/material/Button";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Select from 'react-select'
import './Apply.css'

//Styles

import '../Styles/Invoice.css';
import { ApplyBackToHome, ApplyContent, ApplyContentTitleDiv, ApplyFormButtonContainer, 
        ApplyFormContent, ApplyFormDetails, ApplyFormDetailsLabel, ApplyFormDetailsName, 
        ApplyFormDetailsNameContainer, ApplyFormDetailsNameInside, ApplyFormDetailsProject,
        ApplyFormDetailsProjectElementContainer, ApplyFormDetailsProjectMultiLineContainer, 
        ApplyFormFirstNextButton, ApplyFormSubmitButton, ApplyMain, ApplyNavigation,
        ApplyNavigationLogo, ApplyNavigationNotification, ApplyNavigationProfile, ApplyNavigationProfileEmail, ApplyNavigationProfileToggle, ApplyNavigationSearch, 
        ApplyNavigationTitle, ApplyScreen, Title, } from './StyleApply.js';

//Components

import Logo from '../Icons/BITLogo.png';
import { IoNotificationsOutline, IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { InvoiceContext } from '../InvoiceContext';

import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;
    

function Apply() {

    // const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollnumber, setRollnumber] = useState('');

    const [fieldnumber, setFieldNumber] = useState(0);

    const [showEmail, setShowEmail] = useState(false);

    const toggleEmail = () => {
        setShowEmail(!showEmail);
    }

    useEffect(() => {
        const authToken = Cookies.get('token');

        const verifyToken = async () => {
            try {
                const response = await axios.post(`${API_URL}/verifyToken`, { token: authToken });
                if (response.status === 200) {
                    console.log('User verified');
                    setName(response.data.name);
                    setEmail(response.data.email);
                    setRollnumber(response.data.rollnumber);

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
            verifyToken();
        }
    },[]);

    console.log(name);
    console.log(email);
    console.log(rollnumber);


    //Context Variable

    const { dispatch } = useContext(InvoiceContext);

    //Changeable variables: Form content and elements

    const [ students, setStudents ] = useState({1:{label: 'Saran S M', value: 'saran.al22@bitsathy.ac.in'}});

    const [ activeDetail, setActiveDetail ] = useState('Student');      //Form Content
    const [selectedDate, setSelectedDate] = useState(new Date());       //Date
    const [ projectName, setProjectName ] = useState('');               //Project Name
    const [projectDescription, setProjectDescription] = useState('');   //Project Description
    const [projectTac, setProjectTac] = useState('No TAC');             //Project TAC
    const [facultyName, setFacultyName] = useState('');                 //Faculty Name
    const [preferredTime, setPreferredTime] = useState('AM');           //Preferred Time
    const [fields, setFields] = useState([{ id: 1, value: "" }]);       //Student Name Field
    const [isInputEnabled, setInputEnabled] = useState(false);          //TAC Input Enable/Disable


    const navigate = useNavigate();                                    //Navigation

    //Functions
    // Date Picker setting

    useEffect(() => {
        const nextDay = new Date(selectedDate);
        nextDay.setDate(selectedDate.getDate() + 1);
        setSelectedDate(nextDay);
    }, []);

    //Adding, Changing and deleting student name fields

    const addField = () => {
        setFieldNumber(fieldnumber + 1);
        if( fields.length < 10 ) {
            setFields([...fields, { id: fields.length + 1, value: "" }]);
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Maximum Limit Reached',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    const deleteField = (id) => {
        setFieldNumber(fieldnumber - 1);
        let newFields = fields.filter((field) => field.id !== id);
        newFields = newFields.map((field, index) => {
            return { ...field, id: index + 1 };
        });
        setFields(newFields);
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = newVaue => {
        setInputValue(newVaue);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Sending data...');
                const response = await axios.get(`${API_URL}/user-search`, {
                    params: {
                        q: inputValue,
                        },
                        headers: {
                        'Content-Type': 'application/json'
                        }
                    });
                    let temp = [];
                    for (let i = 0; i < response.data.length; i++) {
                        const label = response.data[i].name;
                        const value = response.data[i].email;
                        temp = [...temp, { label, value }];
                    }
                    setSearchResults(temp);
            }
            catch (error) {
                console.error('(axios) -> An error occurred:', error);
            }
        };

        if (inputValue.length > 0){
        fetchData();}
    }, [inputValue]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    // const handleSelectChange = (selectedOption,id) => {
    //     console.log("$$$$$$$$$$$$$$");
    //     console.log(selectedOption,id);
    //     console.log("$$$$$$$$$$$$$$");
    //     // setStudents({...students},
    //     //     {label : selectedOption,
    //     //     value : id}
    //     // );

    const handleSelectChange = (selectedOption, fieldId) => {
        setStudents((prevStudents) => ({
            ...prevStudents,
            [fieldId]: {
            label: selectedOption.label,
            value: selectedOption.value,
            },
        }));
        console.log("$$$$$$$$$$$$$$");
        console.log(selectedOption,fieldId);
        console.log("$$$$$$$$$$$$$$");
        };

    const handleSelectChangeFaculty = (selectedOption) => {
        setFacultyName(() => ({
            label: selectedOption.label,
            value: selectedOption.value
        }));
        console.log("$$$$$$$$$$$$$$");
        console.log(selectedOption);
        console.log(facultyName)
        console.log("$$$$$$$$$$$$$$");
        };

    const handleNextClick = (e) => {
        // console.log(e);
        // console.log(fields);
        console.log(students);
        console.log("@@@@@@@@@@@@@");
        console.log(fieldnumber);
        console.log(Object.keys(students).length)
        if (fieldnumber === (Object.keys(students).length - 1) ) {
            setActiveDetail(e);
            
        }
        else{
            alert("Please add atleast one student");
        }
    };

    //TAC Input Enable/Disable

    const handleToggleChange = () => {
        setInputEnabled(!isInputEnabled);
    };

    //Navigation for submit and back to home buttons

    const handleBackToHome = () => {
        navigate('/Home');
    }

    //Form submittion button

    const handleFormSubmit = () => {
        const invoiceData = {
          students: fields.map((field) => field.value),
          project: projectName, 
          description: projectDescription, 
          tac: projectTac,
          faculty: facultyName, 
          time: preferredTime,
          date: selectedDate.toISOString().split('T')[0],
        };
    
        dispatch({ type: 'ADD_INVOICE', payload: invoiceData });

        const gettingData = async () => {
            try {
                console.log('Sending data...');
                console.log(activeDetail);
                const response = await axios.post(`${API_URL}/newInvoice`, {
                    activeDetail: students,
                    selectedDate: selectedDate,
                    projectName: projectName,
                    projectDescription: projectDescription,
                    projectTac: projectTac,
                    facultyName: facultyName,
                    preferredTime: preferredTime,
                    fields: fields,
                    isInputEnabled: isInputEnabled,
                    status: "Proposed"
                });
                console.log(response);
                if (response.status === 200) {
                    console.log('Data saved successfully')
                    window.location.href = "/Home";
                } else {
                    console.log(response);
                    console.error('Failed to save data');
                }
            } catch (error) {
                console.error('(axios) -> An error occurred:', error);
            }
        };
        gettingData();
      }

    return(
        <ApplyScreen>
            {/* Navigation Bar */}

            <ApplyNavigation>
                {/* Navigation threedash */}
                

                {/* Navigation Bar Logo */}

                <ApplyNavigationLogo src={Logo} alt="BIT Logo" />

                {/* Navigation Bar Title */}

                <ApplyNavigationTitle>Invoice Portal</ApplyNavigationTitle>

                {/* Navigation Bar Search functionality box */}

                <ApplyNavigationSearch>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                    <Select options={[]} onKeyDown={handleKeyDown} />
                    </Stack>
                </ApplyNavigationSearch>

                {/* Navigation Bar Home Button */}

                <ApplyBackToHome onClick={ handleBackToHome }>
                    <IoHome id="BackToHome" />
                </ApplyBackToHome>

                {/* Natification bell constainer */}

                <ApplyNavigationNotification>
                    <IoNotificationsOutline id="NotificationBell" />
                </ApplyNavigationNotification>

                {/* Profile Avatar */}

                <ApplyNavigationProfile onClick={toggleEmail}>
                    <RxAvatar id="ProfileAvatar" />

                    {showEmail && (
                        <ApplyNavigationProfileToggle>
                            <ApplyNavigationProfileEmail>{ email }</ApplyNavigationProfileEmail>
                        </ApplyNavigationProfileToggle>
                    )}
                </ApplyNavigationProfile>
            </ApplyNavigation>

            {/* Apply Invoice Form Goes Here */}

            <ApplyContent>

                {/* Apply Invoice Form Title */}

                <ApplyContentTitleDiv>
                    <Title className="title">Apply Invoice</Title>
                </ApplyContentTitleDiv>

                {/* Apply Form Content Starts Here */}

                <ApplyMain>
                    <ApplyFormContent>

                        {/* Student Details */}

                        {activeDetail === 'Student' && 
                            <ApplyFormDetails>
                                Student Details:
                                    <ApplyFormDetailsName className="student-team">
                                        <ApplyFormDetailsNameContainer >
                                        {fields.map((field) => (
                                        <ApplyFormDetailsNameInside className="list-student">
                                            <h5>Student {field.id}</h5>
                                            <Stack spacing={1} sx={{ width: 600 }}>
                                            {(field.id === 1)? 
                                            <Select isDisabled={true} options={searchResults} onInputChange={handleInputChange} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChange(selectedOption,field.id)} placeholder={`${name}`} />
                                            
                                            : 
                                            <Select options={searchResults} onInputChange={handleInputChange} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChange(selectedOption,field.id)} isRequired={true} required/>
                                            }
                                            </Stack>

                                            {(field.id == 1) ?
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => deleteField(field.id)}
                                                disabled
                                            >
                                                <MdDeleteOutline id="deleteIcon" />
                                            </Button> : 
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => deleteField(field.id)}
                                            >
                                                <MdDeleteOutline id="deleteIcon" />
                                            </Button>
                                            }
                                        </ApplyFormDetailsNameInside>
                                        ))}
                                        </ApplyFormDetailsNameContainer>
                                        <div className="add-student">
                                            <Button variant="contained" onClick={addField} >
                                                +
                                            </Button>
                                        </div>
                                    </ApplyFormDetailsName>
                            </ApplyFormDetails>
                        }

                        {/* Project Details */}

                        {activeDetail === 'Project' &&
                            <ApplyFormDetails className="form-details">
                                Project Details:
                                <div className="details_container">
                                <ApplyFormDetailsProject>
                                    <ApplyFormDetailsProjectElementContainer>
                                        <div className="flex1">
                                            <div className="innerflex">
                                                <ApplyFormDetailsLabel>TAC: </ApplyFormDetailsLabel>
                                                <TextField 
                                                autoComplete="off"
                                                id="outlined-basic"  
                                                variant="outlined"
                                                disabled={ !isInputEnabled }
                                                onChange={ (e) => setProjectTac(e.target.value) } />
                                                <FormControlLabel
                                                    control={
                                                    <Switch
                                                        checked={isInputEnabled}
                                                        onChange={handleToggleChange}
                                                        color="primary"
                                                    />
                                                    }
                                                />
                                            </div>
                                            <div className="innerflex">
                                        <ApplyFormDetailsLabel>Faculty Name: </ApplyFormDetailsLabel>
                                        <Stack spacing={1} sx={{ width: 400 }}>
                                        <Select options={searchResults} onInputChange={handleInputChange} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChangeFaculty(selectedOption)} isRequired={true}/>
                                        </Stack>
                                            </div>
                                        </div>
                                        </ApplyFormDetailsProjectElementContainer>


                                <ApplyFormDetailsProjectElementContainer>
                                    <div className="flex1 flex2">
                                        <div className="innerflex">
                                            <ApplyFormDetailsLabel>Project Name: </ApplyFormDetailsLabel>
                                            <TextField
                                            autoComplete="off"
                                            required
                                            id="outlined-basic"
                                            label="Project Name"
                                            variant="outlined"
                                            onChange={ (e) => setProjectName(e.target.value) }
                                            />
                                        </div>
                                        <div className="innerflex">
                                    <ApplyFormDetailsLabel for="Project Name">Preferred Time: </ApplyFormDetailsLabel>
                                        <FormControl>
                                            <RadioGroup
                                                required
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                onChange={ () => setPreferredTime('PM')}
                                            >
                                                <FormControlLabel id="FormControlRadio" value="Morning" control={<Radio />} label="AM" />
                                                <FormControlLabel id="FormControlRadio" value="Afternoon" control={<Radio />} label="PM" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>
                                    </div>
                                </ApplyFormDetailsProjectElementContainer>

                                <ApplyFormDetailsProjectMultiLineContainer>
                                        <div className=" flex3">
                                            <div className="innerflex third-row">
                                                <ApplyFormDetailsLabel>Description: </ApplyFormDetailsLabel>
                                                <TextField
                                                autoComplete="off"
                                                    id="outlined-multiline-static"
                                                    multiline
                                                    rows={5}
                                                    label="What is this invoice for?"
                                                    onChange={ (e) => setProjectDescription(e.target.value) }
                                                />
                                            </div>
                                            <div className="innerflex third-two2">
                                                <ApplyFormDetailsLabel>Date: </ApplyFormDetailsLabel>
                                                <TextField
                                                autoComplete="off"
                                                required
                                                id="outlined-basic-date"
                                                type="date"
                                                variant="outlined"
                                                value={selectedDate.toISOString().split('T')[0]}
                                                disabled
                                            />
                                            </div>
                                        </div>

                                    </ApplyFormDetailsProjectMultiLineContainer>
                                </ApplyFormDetailsProject>
                                </div>
                            </ApplyFormDetails>
                        }
                    </ApplyFormContent>

                    {/* Apply Form Buttons */}
                    
                    <ApplyFormButtonContainer>
                        { activeDetail === 'Student' ? 
                        <ApplyFormFirstNextButton onClick={ () => handleNextClick('Project') }>Next</ApplyFormFirstNextButton> :
                        <>
                            <ApplyFormFirstNextButton onClick={ () => handleNextClick('Student') }>Previous</ApplyFormFirstNextButton>
                            <ApplyFormSubmitButton onClick={handleFormSubmit}>Submit</ApplyFormSubmitButton>
                            
                        </>
                        }
                    </ApplyFormButtonContainer>
                </ApplyMain>
            </ApplyContent>
        </ApplyScreen>
    );
}

export default Apply;