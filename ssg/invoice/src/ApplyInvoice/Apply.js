//Dependencies

import React, { useState, useEffect, useContext } from "react";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from "@mui/material/Button";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

//Styles

import '../Styles/Invoice.css';
import { ApplyBackToHome, ApplyContent, ApplyContentTitleDiv, ApplyFormButtonContainer, 
        ApplyFormContent, ApplyFormDetails, ApplyFormDetailsLabel, ApplyFormDetailsName, 
        ApplyFormDetailsNameContainer, ApplyFormDetailsNameInside, ApplyFormDetailsProject,
        ApplyFormDetailsProjectElementContainer, ApplyFormDetailsProjectMultiLineContainer, 
        ApplyFormFirstNextButton, ApplyFormSubmitButton, ApplyMain, ApplyNavigation, 
        ApplyNavigationLogo, ApplyNavigationNotification, ApplyNavigationProfile, ApplyNavigationSearch, 
        ApplyNavigationTitle, ApplyScreen, Title, } from './StyleApply.js';

//Components

import Logo from '../Icons/BITLogo.png';
import { IoNotificationsOutline, IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { InvoiceContext } from '../InvoiceContext';

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;



const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

function Apply() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollnumber, setRollnumber] = useState('');

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
        const updatedFields = fields.filter((field) => field.id !== id);
    
        for (let i = 0; i < updatedFields.length; i++) {
            updatedFields[i].id = i + 1;
        }
        
        setFields(updatedFields);
    };

    const handleInputChange = (id, value) => {
        const updatedFields = fields.map((field) =>
          field.id === id ? { ...field, value } : field
        );
        setFields(updatedFields);
    };

    //Switching between Student and Project Details

    const handleNextClick = (e) => {
        setActiveDetail(e);
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
                const response = await axios.post(`${API_URL}/newInvoice`, {
                    activeDetail: activeDetail,
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

                {/* Navigation Bar Logo */}

                <ApplyNavigationLogo src={Logo} alt="BIT Logo" />

                {/* Navigation Bar Title */}

                <ApplyNavigationTitle>BIT INVOICE PORTAL</ApplyNavigationTitle>

                {/* Navigation Bar Search functionality box */}

                <ApplyNavigationSearch>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search for invoice...."
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                    
                                />
                            )}
                        />
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

                <ApplyNavigationProfile>
                    <RxAvatar id="ProfileAvatar" />
                </ApplyNavigationProfile>
            </ApplyNavigation>

            {/* Apply Invoice Form Goes Here */}

            <ApplyContent>

                {/* Apply Invoice Form Title */}

                <ApplyContentTitleDiv>
                    <Title>Apply Invoice</Title>
                </ApplyContentTitleDiv>

                {/* Apply Form Content Starts Here */}

                <ApplyMain>
                    <ApplyFormContent>

                        {/* Student Details */}

                        {activeDetail === 'Student' && 
                            <ApplyFormDetails>
                                Student Details:
                                <ApplyFormDetailsName>
                                    <ApplyFormDetailsNameContainer>
                                    {fields.map((field) => (
                                        <ApplyFormDetailsNameInside>
                                        <h5>Student {field.id}</h5>
                                        <Stack spacing={1} sx={{ width: 700 }}>
                                            <Autocomplete
                                                freeSolo
                                                id={`free-solo-2-demo-${field.id}`}
                                                disableClearable
                                                options={top100Films.map((option) => option.title)}
                                                onInputChange={(e, newValue) => handleInputChange(field.id, newValue)}
                                                key={field.id}
                                                renderInput={(params) => (
                                                    <TextField
                                                    {...params}
                                                    label="Student"
                                                    variant="outlined"
                                                    value={field.value}
                                                    />
                                                )}
                                            />
                                        </Stack>

                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => deleteField(field.id)}
                                        >
                                            <MdDeleteOutline id="deleteIcon" />
                                        </Button>
                                        </ApplyFormDetailsNameInside>
                                    ))}
                                    </ApplyFormDetailsNameContainer>
                                    <Button variant="contained" onClick={addField}>
                                        +
                                    </Button>
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
                                    <TextField 
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

                                    <ApplyFormDetailsLabel>Faculty Name: </ApplyFormDetailsLabel>
                                    <Stack spacing={1} sx={{ width: 400 }}>
                                        <Autocomplete
                                            freeSolo
                                            id="free-solo-2-demo"
                                            disableClearable
                                            options={top100Films.map((option) => option.title)}
                                            value={facultyName} // Set the value of the Autocomplete to facultyName
                                            onInputChange={(e, newValue) => setFacultyName(newValue)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Search for faculty...."
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        type: 'search',
                                                    }}
                                                />
                                            )}
                                        />
                                    </Stack>
                                    </ApplyFormDetailsProjectElementContainer>

                                <ApplyFormDetailsProjectElementContainer>
                                    <ApplyFormDetailsLabel>Project Name: </ApplyFormDetailsLabel>
                                    <TextField
                                    required
                                    id="outlined-basic"
                                    label="Project Name"
                                    variant="outlined"
                                    onChange={ (e) => setProjectName(e.target.value) }
                                    />

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
                                </ApplyFormDetailsProjectElementContainer>

                                <ApplyFormDetailsProjectMultiLineContainer>
                                    <ApplyFormDetailsLabel>Description: </ApplyFormDetailsLabel>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={5}
                                            label="What is this invoice for?"
                                            onChange={ (e) => setProjectDescription(e.target.value) }
                                        />

                                        <ApplyFormDetailsLabel>Date: </ApplyFormDetailsLabel>
                                        <TextField
                                        required
                                        id="outlined-basic-date"
                                        type="date"
                                        variant="outlined"
                                        value={selectedDate.toISOString().split('T')[0]}
                                        disabled
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