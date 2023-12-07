//Dependencies

import React, { useState, useEffect, useContext } from "react";
// import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { GoogleLogout } from "react-google-login";
// import { useNavigate } from 'react-router-dom';
// import Autocomplete from '@mui/material/Autocomplete';

import Button from "@mui/material/Button";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Select from 'react-select'
import './Apply.css'
import UseMediaQuery from "../Home Page/UseMediaQuery.js";
import MinMediaQuery from "../Home Page/MinMediaQuery.js";
import Navbar from "../components/Navbar.js";

//Styles

import '../Styles/Invoice.css';
import { ApplyBackToHome, ApplyContent, ApplyContentTitleDiv, ApplyFormButtonContainer, 
        ApplyFormContent, ApplyFormDetails, ApplyFormDetailsLabel, ApplyFormDetailsName, 
        ApplyFormDetailsNameContainer, ApplyFormDetailsNameInside, ApplyFormDetailsProject,
        ApplyFormDetailsProjectElementContainer, ApplyFormDetailsProjectMultiLineContainer, 
        ApplyFormFirstNextButton, ApplyFormSubmitButton, ApplyMain, ApplyNavigation,
        ApplyNavigationLogo, ApplyNavigationNotification, ApplyNavigationProfile, ApplyNavigationProfileEmail, ApplyNavigationProfileToggle, ApplyNavigationSearch, 
        ApplyNavigationTitle, ApplyScreen, Title, } from './StyleApply.js';
import {HomePageThreeDash,LogoutBoxHighlight,LogoutBoxButton,HomePageSideBarSeperationBottom,HomePageSideBarButton,HomePageSideBarSeperation,
    HomePageSideBar}from '../Home Page/StylesHomePage.js';

//Components

import Logo from '../Icons/BITLogo.png';
import Bell from '../Icons/bell.png';
import User from '../Icons/profile.png';
import { IoNotificationsOutline, IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { InvoiceContext } from '../InvoiceContext.js';
import { AiOutlineHome, AiFillSlackCircle } from "react-icons/ai";

import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENTID;
const API_URL = process.env.REACT_APP_API_URL;
    

function Apply() {

    // const [searchTerm, setSearchTerm] = useState('');
    const [searchResultsStudent, setSearchResultsStudent] = useState([]);
    const [searchResultsFaculty, setSearchResultsFaculty] = useState([]);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [rollnumber, setRollnumber] = useState();

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

                    handleSelectChange({label: response.data.name, value: response.data.email},1)

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

    const [ students, setStudents ] = useState({});

    const [ activeDetail, setActiveDetail ] = useState('Student');      //Form Content
    const [selectedDate, setSelectedDate] = useState(new Date());       //Date
    const [ projectName, setProjectName ] = useState('');               //Project Name
    const [projectDescription, setProjectDescription] = useState('');   //Project Description
    const [projectTac, setProjectTac] = useState('');                   //Project TAC
    const [facultyName, setFacultyName] = useState('');                 //Faculty Name
    const [preferredTime, setPreferredTime] = useState('AM');           //Preferred Time
    const [fields, setFields] = useState([{ id: 1, value: "" }]);       //Student Name Field
    const [isInputEnabled, setInputEnabled] = useState(false);          //TAC Input Enable/Disable


    const navigate = useNavigate();                                    //Navigation

    //Functions
    // Date Picker setting
    
    let count = 0; 

    useEffect(() => {
        const nextDay = new Date(selectedDate);
        nextDay.setDate(selectedDate.getDate() + 1);
        console.log(`--> ${nextDay}, --> ${selectedDate}`);
        setSelectedDate(nextDay);
        count = count + 1;
    }, [(count === 0)]);

    //Adding, Changing and deleting student name fields

    const addField = () => {
        if( fields.length < 10 ) {
            console.log(fieldnumber);
            setFieldNumber(fieldnumber + 1);
            console.log(fieldnumber);
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
        console.log(`fieldnumber ->>> ${fieldnumber}`);
        let newfieldnumber = fieldnumber - 1 
        console.log(newfieldnumber); 
        setFieldNumber(newfieldnumber);
        let newFields = fields.filter((field) => field.id !== id);
        newFields = newFields.map((field, index) => {
            return { ...field, id: index + 1 };
        });
        setFields(newFields);
        // setStudents(
            setStudents((prevDictionary) => {
                //Deleting the last element in the Dictionary
                const newDictionary = { ...prevDictionary };
                delete newDictionary[fieldnumber+1]
                return newDictionary;
              });
    };

    const [inputValueStudent, setInputValueStudent] = useState('');
    const [inputValueFaculty, setInputValueFaculty] = useState('');

    const handleInputChange = newVaue => {
        setInputValueStudent(newVaue);
    }

    const handleInputChangeFaculty = newVaue => {
        setInputValueFaculty(newVaue);
    }

    useEffect(() => {
        console.log(selectedDate);
        const fetchData = async () => {
            try {
                console.log('Sending data...');
                const response = await axios.get(`${API_URL}/user-search`, {
                    params: {
                        q: inputValueStudent,
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
                    setSearchResultsStudent(temp);
            }
            catch (error) {
                console.error('(axios) -> An error occurred:', error);
            }
        };

        if (inputValueStudent.length > 0){
        fetchData();}
    }, [inputValueStudent]);

    useEffect(() => {
        const fetchDataFaculty = async () => {
            try {
                console.log('Sending data...');
                const response = await axios.get(`${API_URL}/faculty-search`, {
                    params: {
                        q: inputValueFaculty,
                        },
                        headers: {
                        'Content-Type': 'application/json'
                        }
                    });
                    let tempfaculty = [];
                    for (let i = 0; i < response.data.length; i++) {
                        const label = response.data[i].name;
                        const value = response.data[i].email;
                        tempfaculty = [...tempfaculty, { label, value }];
                    }
                    setSearchResultsFaculty(tempfaculty);
            }
            catch (error) {
                console.error('(axios) -> An error occurred:', error);
            }
        };

        if (inputValueFaculty.length > 0){
        fetchDataFaculty();}
    }, [inputValueFaculty]);    

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
        // console.log("''''''''''''''''''''''''''''");
        // console.log(selectedOption,fieldId);
        setStudents((prevStudents) => ({
            ...prevStudents,
            [fieldId]: {
            label: selectedOption.label,
            value: selectedOption.value,
            accepted: false
            },
        }));
        console.log("$$$$$$$$$$$$$$");
        console.log(students);
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
        if(activeDetail && selectedDate && projectName && projectDescription && facultyName && preferredTime && fields && ((!isInputEnabled) || (isInputEnabled === true && projectTac !== ''))) {

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
            // for (let i = 0; i < fields.length; i++) {}
            let TotalStudents = Object.keys(students).length;
            let StudentsName = [];
            let StudentsEmail = [];

            for (let i = 0; i < TotalStudents; i++) {
                StudentsName.push(students[`${Object.keys(students)[i]}`]["label"]);
                StudentsEmail.push(students[`${Object.keys(students)[i]}`]["value"]);
            }
            try {
                console.log('Sending data...');
                console.log(activeDetail);
                const response = await axios.post(`${API_URL}/newInvoice`, {
                    TotalStudents: TotalStudents,
                    StudentsName: StudentsName,
                    StudentsEmail: StudentsEmail,
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
    else {
        console.log(isInputEnabled, projectTac);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please fill all the fields',
            showConfirmButton: false,
            timer: 1500
        })
    }
}
      const handleLinkChange = (e) => {
        navigate('/Home');
    }

    const onSuccess = () => {
        // alert("Logout made successfully");
        Cookies.remove('token');
        console.log("Logged Out...");
        window.location.href = "/";
    };
    const onFailure = () => {
        console.log("Handle failure cases");
        alert("Logout failed");
    };
    // const handleApplyClick = () => {
    //     navigate('/Apply');
    // };
    const matches = UseMediaQuery("(max-width:1025px)");
    const minmatches = MinMediaQuery("(min-width:1025px)");
    return(
        <ApplyScreen>
             <Navbar />
            {/* Apply Invoice Form Goes Here */}
            <ApplyContent>          
                {/* Apply Form Content Starts Here */}
                <ApplyMain>
                    {/* Apply Invoice Form Title */}

                    <ApplyContentTitleDiv>
                        <Title className="title">Apply Invoice</Title>
                    </ApplyContentTitleDiv>
                    <ApplyFormContent>

                        {/* Student Details */}

                        {activeDetail === 'Student' && 
                            <ApplyFormDetails>
                                Student Entry:
                                    <ApplyFormDetailsName className="student-team">
                                        <ApplyFormDetailsNameContainer >
                                        {fields.map((field) => (
                                        <ApplyFormDetailsNameInside className="list-student">
                                            <h5>Student {field.id}</h5>
                                            <Stack spacing={1} sx={{ width: 600 }}>
                                            {(field.id === 1)? 
                                            <Select isDisabled={true} options={searchResultsStudent} onInputChange={handleInputChange} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChange(selectedOption,field.id)} placeholder={`${name}`} />
                                            
                                            : 
                                            <Select options={searchResultsStudent} onInputChange={handleInputChange} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChange(selectedOption,field.id)} isRequired={true} required/>
                                            }
                                            </Stack>

                                            {(field.id === 1) ?
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
                            <ApplyFormDetails>
                                Project Details:
                                <ApplyFormDetailsProject>
                                    <ApplyFormDetailsProjectElementContainer>
                                                <ApplyFormDetailsLabel>TAC: </ApplyFormDetailsLabel>
                                                <input 
                                                className="input-text"
                                                placeholder="TAC ID"
                                                autoComplete="off"  
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
                                        <ApplyFormDetailsLabel>Faculty Name: </ApplyFormDetailsLabel>
                                        <Stack spacing={1} >
                                        <Select options={searchResultsFaculty} onInputChange={handleInputChangeFaculty} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChangeFaculty(selectedOption)} isRequired={true}/>
                                        {/* <Stack spacing={1} >
                                        <Select options={searchResults} onInputChange={handleInputChange} onKeyDown={handleKeyDown} onChange={(selectedOption) => handleSelectChangeFaculty(selectedOption)} isRequired={true}/> */}
                                        </Stack>
                                    </ApplyFormDetailsProjectElementContainer>
                                    <ApplyFormDetailsProjectElementContainer className="flex-row">
                                            <div className="inner-flex"> 
                                                <ApplyFormDetailsLabel>Project Name:</ApplyFormDetailsLabel>
                                                <input
                                                autoComplete="off"
                                                className="pro-name"
                                                placeholder="Project Name"
                                                required={true}
                                                label="Project Name"
                                                variant="outlined"
                                                onChange={ (e) => setProjectName(e.target.value) }
                                                />
                                            </div>
                                            <div className="inner-flex">
                                            <ApplyFormDetailsLabel for="Project Name">Preferred Time:</ApplyFormDetailsLabel>
                                            <FormControl>
                                            <RadioGroup
                                                required
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                onChange={ () => setPreferredTime('PM')}
                                            >
                                            <div className="FormControl">
                                                <FormControlLabel id="FormControlRadio" value="Morning" control={<Radio />} label="AM" />
                                                <FormControlLabel id="FormControlRadio" value="Afternoon" control={<Radio />} label="PM" />
                                            </div>
                                            </RadioGroup>
                                            </FormControl>
                                            </div>
                                    </ApplyFormDetailsProjectElementContainer>

                                    <ApplyFormDetailsProjectMultiLineContainer>
                                        <ApplyFormDetailsLabel>Date: </ApplyFormDetailsLabel>
                                                <input
                                                autoComplete="off"
                                                required
                                                className="pro-name"
                                                type="date"
                                                variant="outlined"
                                                value={selectedDate.toISOString().split('T')[0]}
                                                disabled
                                            />
                                                <ApplyFormDetailsLabel>Description: </ApplyFormDetailsLabel>
                                                <textarea
                                                    autoComplete="off"
                                                    placeholder="Invoice Description"
                                                    multiline
                                                    rows={5}
                                                    label="What is this invoice for?"
                                                    onChange={ (e) => setProjectDescription(e.target.value) }
                                                />                                           
                                    </ApplyFormDetailsProjectMultiLineContainer>
                                </ApplyFormDetailsProject>
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