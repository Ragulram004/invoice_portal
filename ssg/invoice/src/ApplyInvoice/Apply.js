//Dependencies

import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

//Styles

import '../Styles/Invoice.css';
import { ApplyContent, ApplyContentTitleDiv, ApplyFormButtonContainer, ApplyFormContent, ApplyFormDetailsConstainer,
     ApplyFormDetailsLabel, ApplyFormFirstNextButton,
     ApplyFormNameContainer, ApplyFormSubmitButton, 
    ApplyMain, ApplyNavigation, ApplyNavigationDN, ApplyNavigationDNInput, 
    ApplyNavigationLogo, ApplyNavigationNotification, ApplyNavigationProfile,
     ApplyNavigationSearch, ApplyNavigationSearchBox, ApplyNavigationSearchField, 
     ApplyNavigationSearchInput, ApplyNavigationTitle, ApplyScreen, Title, } from './StyleApply.js';

//Components

import Logo from '../Icons/BITLogo.png';
import { IoNotificationsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import AddStudent from "./Components/AddStudent";

function Apply() {

    const [ activeDetail, setActiveDetail ] = useState('Student');

    const handleNextClick = (e) => {
        setActiveDetail(e);
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
                    <ApplyNavigationSearchBox>
                        <ApplyNavigationSearchField>
                            <ApplyNavigationSearchInput placeholder="Search for invoice..." type="text"/>
                        </ApplyNavigationSearchField>
                    </ApplyNavigationSearchBox>
                </ApplyNavigationSearch>

                {/* Theme toogle functionality switch */}

                <ApplyNavigationDN for="switch">
                    <ApplyNavigationDNInput id="switch" type="checkbox" />

                    {/* Named as moon but this is for sun */}

                    <div class="icon icon--moon">
                        <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                        </svg>
                    </div>
                
                    {/* Named as sun but this is for moon */}

                    <div class="icon icon--sun">
                        <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </ApplyNavigationDN>

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
                        <ApplyFormNameContainer>
                            {activeDetail === 'Student' && 
                                <>
                                    Student Details: 
                                    <AddStudent />
                                </>
                            }

                            {activeDetail === 'Project' &&
                                <>
                                    Project Details:

                                    <ApplyFormDetailsConstainer>
                                        <ApplyFormDetailsLabel for="Project Name">Project Name: </ApplyFormDetailsLabel>
                                        <TextField required id="outlined-basic" label="Project Name" variant="outlined" />
                                    </ApplyFormDetailsConstainer>

                                    <ApplyFormDetailsConstainer>
                                    <ApplyFormDetailsLabel for="Project Name">Description: </ApplyFormDetailsLabel>
                                    <TextField
                                        required
                                        id="outlined-multiline-static"
                                        label="Desctiption"
                                        multiline
                                        rows={5}
                                        defaultValue="Why this Invoice?"
                                    />
                                    </ApplyFormDetailsConstainer>
                                    
                                </>
                            }

                            {activeDetail === 'Faculty' &&
                                <>
                                    Faculty Details:

                                    <ApplyFormDetailsConstainer>
                                        <ApplyFormDetailsLabel for="Project Name">TAC: </ApplyFormDetailsLabel>
                                        <TextField required id="outlined-basic" label="Project Name" variant="outlined" />
                                    </ApplyFormDetailsConstainer>

                                    <ApplyFormDetailsConstainer>
                                        <ApplyFormDetailsLabel for="Project Name">Faculty Name: </ApplyFormDetailsLabel>
                                        <TextField required id="outlined-basic" label="Project Name" variant="outlined" />
                                    </ApplyFormDetailsConstainer>

                                    <ApplyFormDetailsConstainer>
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
                                    </ApplyFormDetailsConstainer>
                                    
                                </>
                            }
                        </ApplyFormNameContainer>
                    </ApplyFormContent>
                    <ApplyFormButtonContainer>
                        { activeDetail === 'Student' ? 
                        <ApplyFormFirstNextButton onClick={ () => handleNextClick('Project') }>Next</ApplyFormFirstNextButton> :
                        <>
                        {activeDetail === 'Project' ?
                        <>
                            <ApplyFormFirstNextButton onClick={ () => handleNextClick('Student') }>Previous</ApplyFormFirstNextButton>
                            <ApplyFormFirstNextButton onClick={ () => handleNextClick('Faculty') }>Next</ApplyFormFirstNextButton>
                        </>:
                        <>
                            <ApplyFormFirstNextButton onClick={ () => handleNextClick('Project') }>Previous</ApplyFormFirstNextButton>
                            <ApplyFormSubmitButton>Submit</ApplyFormSubmitButton>
                        </>
                        }
                        </> }
                    </ApplyFormButtonContainer>
                </ApplyMain>
            </ApplyContent>
        </ApplyScreen>
    );
}

export default Apply;