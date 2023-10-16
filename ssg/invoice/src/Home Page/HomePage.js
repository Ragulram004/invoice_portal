// Dependencies

import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

//Styles

import '../Styles/Invoice.css';
import { HomePageScreen, HomePageNavigation, HomePageSideBar, HomePageContent, 
        HomePageMain, HomePageActionButtons, HomePageActionTabs, 
        HomePageActionContent, HomePageActionTabsInput, HomePageActionTabsLabel, HomePageTabContent,
        HomePageNavigationLogo, HomePageNavigationTitle, HomePageNavigationSearch,
        HomePageNavigationDN,
        HomePageNavigationDNInput,
        HomePageNavigationNotification,
        HomePageNavigationProfile,
        HomePageSideBarSeperation,
        HomePageSideBarButton,
        HomePageSideBarSeperationBottom} from './StylesHomePage.js';

//Components

import Logo from '../Icons/BITLogo.png';
import { IoNotificationsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineHome, AiFillSlackCircle } from "react-icons/ai";
import HomeLink from "./Components/HomeLink.js";
import TACLink from "./Components/TACLink.js";
import OtherLink from "./Components/OtherLink";


const clientId = process.env.REACT_APP_CLIENTID;


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


function HomePage() {

    // useEffect(() => {
    //         const authToken = Cookies.get('token');

    //             if (!authToken) {
    //                 window.location.href = '/';
    //                 return;
    //             };
    // });

    const [activeTab, setActiveTab] = useState('Proposed');
    const [activeLink, setActiveLink] = useState('Home');
    const Navigate = useNavigate();

    const handleTabChange = (e) => {
        setActiveTab(e);
    }

    const handleLinkChange = (e) => {
        setActiveLink(e);
    }

    const onSuccess = () => {
        // alert("Logout made successfully");
        window.location.href = "/";
        Cookies.remove('token');
    };

    const onFailure = () => {
        console.log("Handle failure cases");
        alert("Logout failed");
    };

    const handleApplyClick = () => {
        Navigate('/Apply');
    }

    return (
        <HomePageScreen>

            {/* Navigation Bar */}

            <HomePageNavigation>

                {/* Navigation Bar Logo */}

                <HomePageNavigationLogo src={Logo} alt="BIT Logo" />

                {/* Navigation Bar Title */}

                <HomePageNavigationTitle>BIT INVOICE PORTAL</HomePageNavigationTitle>

                {/* Navigation Bar Search functionality box */}

                <HomePageNavigationSearch>
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
                </HomePageNavigationSearch>

                {/* Theme toogle functionality switch */}

                <HomePageNavigationDN for="switch">
                    <HomePageNavigationDNInput id="switch" type="checkbox" />

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
                </HomePageNavigationDN>

                {/* Natification bell constainer */}

                <HomePageNavigationNotification>
                    <IoNotificationsOutline id="NotificationBell" />
                </HomePageNavigationNotification>

                {/* Profile Avatar */}

                <HomePageNavigationProfile>
                    <RxAvatar id="ProfileAvatar" />
                </HomePageNavigationProfile>
            </HomePageNavigation>

            {/* Below the Navigation Bar is the Home Page Content. */}
            {/* This is broken down into the Side Bar and the Main Content. */}

            <HomePageContent>

                {/* Home page side bar with the navigation links. */}

                <HomePageSideBar>

                    {/* Home page side bar navigation links. */}

                    <HomePageSideBarSeperation>

                        {/* Showing the navigation links for the Home Page Side Bar. */}
                        <HomePageSideBarButton onClick={ () => handleLinkChange('Home') }>
                            <AiOutlineHome id="SideBarHomeIcon" />
                            Home
                        </HomePageSideBarButton>

                        {/* Showing the Invoices related to TAC */}

                        <HomePageSideBarButton onClick={ () => handleLinkChange('TAC') }>
                            <AiFillSlackCircle id="SideBarHomeIcon" />
                            TAC
                        </HomePageSideBarButton>

                        {/* Showing the Invoices related to Other events */}

                        <HomePageSideBarButton onClick={ () => handleLinkChange('Other') }>
                            <AiFillSlackCircle id="SideBarHomeIcon" />
                            Other
                        </HomePageSideBarButton>
                    </HomePageSideBarSeperation>

                    {/* Home page side bar logout button. */}

                    <HomePageSideBarSeperationBottom>
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={() => onSuccess()}
                            onFailure={() => onFailure()}
                        />
                    </HomePageSideBarSeperationBottom>
                </HomePageSideBar>

                {/* Home page main content about the proposed, approved and rejected invoices. */}

                <HomePageMain>
                    <HomePageActionContent>
                        <HomePageActionTabs>
                            <HomePageActionTabsInput type="radio" id="proposed" name="tabs" value="Proposed" checked={activeTab === 'Proposed'} onChange={() => handleTabChange('Proposed')} />
                            <HomePageActionTabsLabel htmlFor="proposed">Proposed</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="approved" name="tabs" value="Completed" checked={activeTab === 'Completed'} onChange={() => handleTabChange('Completed')} />
                            <HomePageActionTabsLabel htmlFor="approved">Completed</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="rejected" name="tabs" value="Rejected" checked={activeTab === 'Rejected'} onChange={() => handleTabChange('Rejected')} />
                            <HomePageActionTabsLabel htmlFor="rejected">Rejected</HomePageActionTabsLabel>

                            <HomePageActionTabsInput type="radio" id="withdrawn" name="tabs" value="Withdrawn" checked={activeTab === 'Withdrawn'} onChange={() => handleTabChange('Withdrawn')} />
                            <HomePageActionTabsLabel htmlFor="withdrawn">Withdrawn</HomePageActionTabsLabel>

                            <HomePageActionButtons onClick={handleApplyClick}>Apply Invoice</HomePageActionButtons>
                        </HomePageActionTabs>
                        
                        { activeLink === 'Home' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <HomeLink />}
                                {activeTab === 'Completed' && <HomeLink />}
                                {activeTab === 'Rejected' && <HomeLink />}
                                {activeTab === 'Withdrawn' && <HomeLink />}
                            </HomePageTabContent> 
                        }
                        { activeLink === 'TAC' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <TACLink />}
                                {activeTab === 'Completed' && <TACLink />}
                                {activeTab === 'Rejected' && <TACLink />}
                                {activeTab === 'Withdrawn' && <TACLink />}
                            </HomePageTabContent>
                        }
                        { activeLink === 'Other' &&
                            <HomePageTabContent>
                                {activeTab === 'Proposed' && <OtherLink />}
                                {activeTab === 'Completed' &&  <OtherLink />}
                                {activeTab === 'Rejected' && <OtherLink />}
                                {activeTab === 'Withdrawn' &&  <OtherLink />}
                            </HomePageTabContent>
                        }
                    </HomePageActionContent>
                </HomePageMain>
            </HomePageContent>
        </HomePageScreen>
    );
}

export default HomePage;