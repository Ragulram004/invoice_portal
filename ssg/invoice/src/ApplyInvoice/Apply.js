//Dependencies

import React, { useState } from "react";
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

    const [ activeDetail, setActiveDetail ] = useState('Student');
    const navigate = useNavigate();
    const [fields, setFields] = useState([{ id: 1, value: "" }]);

    const [isInputEnabled, setInputEnabled] = useState(false);

    const handleToggleChange = () => {
        setInputEnabled(!isInputEnabled);
    };

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

  const handleInputChange = (id, value) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
  };

  const deleteField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);

    for (let i = 0; i < updatedFields.length; i++) {
        updatedFields[i].id = i + 1;
    }
    
    setFields(updatedFields);
  };

    const handleNextClick = (e) => {
        setActiveDetail(e);
    }

    const handleBackToHome = () => {
        navigate('/Home');
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
                <ApplyContentTitleDiv>
                    <Title>Apply Invoice</Title>
                </ApplyContentTitleDiv>

                <ApplyMain>
                    <ApplyFormContent>
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
                                                id="free-solo-2-demo"
                                                disableClearable
                                                options={top100Films.map((option) => option.title)}
                                                key={field.id}
                                                renderInput={(params) => (
                                                    <TextField
                                                    {...params}
                                                    label="Student"
                                                    variant="outlined"
                                                    value={field.value}
                                                    onChange={(e) => handleInputChange(field.id, e.target.value)}
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

                        {activeDetail === 'Project' &&
                            <ApplyFormDetails>
                            Project Details:
                            <ApplyFormDetailsProject>
                                <ApplyFormDetailsProjectElementContainer>
                                    <ApplyFormDetailsLabel>TAC: </ApplyFormDetailsLabel>
                                    <TextField 
                                    id="outlined-basic" 
                                    value="TAC - " 
                                    variant="outlined"
                                    disabled={ !isInputEnabled } />
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
                                    </ApplyFormDetailsProjectElementContainer>

                                <ApplyFormDetailsProjectElementContainer>
                                    <ApplyFormDetailsLabel>Project Name: </ApplyFormDetailsLabel>
                                    <TextField
                                    required
                                    id="outlined-basic"
                                    label="Project Name"
                                    variant="outlined"
                                    />

                                    <ApplyFormDetailsLabel for="Project Name">Preferred Time: </ApplyFormDetailsLabel>
                                        <FormControl>
                                            <RadioGroup
                                                required
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel id="FormControlRadio" value="Morning" control={<Radio />} label="AM" />
                                                <FormControlLabel id="FormControlRadio" value="Afternoon" control={<Radio />} label="PM" />
                                            </RadioGroup>
                                        </FormControl>
                                </ApplyFormDetailsProjectElementContainer>

                                <ApplyFormDetailsProjectMultiLineContainer>
                                    <ApplyFormDetailsLabel>Project Description: </ApplyFormDetailsLabel>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Multiline"
                                            multiline
                                            rows={5}
                                            defaultValue="What is this invoice for?"
                                        />

                                        <ApplyFormDetailsLabel>Date: </ApplyFormDetailsLabel>
                                        <TextField
                                        required
                                        id="outlined-basic-date"
                                        type="date"
                                        variant="outlined"
                                        />
                                    </ApplyFormDetailsProjectMultiLineContainer>
                                </ApplyFormDetailsProject>
                            </ApplyFormDetails>
                        }
                    </ApplyFormContent>
                    <ApplyFormButtonContainer>
                        { activeDetail === 'Student' ? 
                        <ApplyFormFirstNextButton onClick={ () => handleNextClick('Project') }>Next</ApplyFormFirstNextButton> :
                        <>
                            <ApplyFormFirstNextButton onClick={ () => handleNextClick('Student') }>Previous</ApplyFormFirstNextButton>
                            <ApplyFormSubmitButton>Submit</ApplyFormSubmitButton>
                            
                        </>
                        }
                    </ApplyFormButtonContainer>
                </ApplyMain>
            </ApplyContent>
        </ApplyScreen>
    );
}

export default Apply;