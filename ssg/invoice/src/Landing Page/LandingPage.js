//Dependencies

import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script';
import axios from 'axios';
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Cookies from 'js-cookie';

//Styling

import '../Styles/Invoice.css';
import { LandingPageContainer, LoginBox, LoginBoxHeader, LoginBoxBody, 
        LoginBoxTitle, LoginBoxFooter, LoginBoxButton, LoginBoxHighlight } from './StyleLandingPage.js';

//Assets

import BITLogo from '../Icons/BITLogo.png';

//Typography

const theme = createTheme({
    typography: {
        fontFamily: [
            'Arial Narrow',
            'sans-serif',
        ].join(','),
        Welcome: {
            fontSize: 25,
            color: 'var(--text)',
        },
        Title: {
            fontSize: 30,
            color: 'var(--text)',
            letterSpacing: 5,
        },
        Footer: {
            fontSize: 20,
            color: 'var(--text)',
        },
    },
});


const clientId = process.env.REACT_APP_CLIENTID;

function LandingPage() {

    const [email, setEmail] = useState({ email: ""});

    const onSuccess = async (res) => {

        // console.log("Login Success: currentUser:", res.profileObj.email);
        setEmail({ email: res.profileObj.email });
        // window.location.href = "/Home";
        console.log(email);
        console.log(res.profileObj.email);
        try {
            const response = await axios.post('http://localhost:3002/getUsers', email);
            console.log(response);
            if (response.status === 200) {
                window.location.href = "/Home"
                console.log('Data saved successfully')                
                // (response => {
                //     localStorage.setItem('token', response.data.token)})
                    console.log(response.data.accesstoken);
                    // const authToken = response.data.accesstoken;
                    Cookies.set('token', response.data.accesstoken, { expires: 1/24 });
                    
            } else {
                console.log(response);
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('(axios) -> An error occurred:', error);
            }
        };

    const onFailure = (res) => {
        console.log("Login failed: res:", res);
    }
  
    useEffect(() => {
        async function start() {
        await gapi.client.init({
            clientId: clientId,
            scope: 'profile email'
        })
        };
        gapi.load('client', () => start);    });

    return (
            <LandingPageContainer>
                <LoginBox>

                    <LoginBoxHeader>
                        <ThemeProvider theme={theme}>
                            <Typography variant="Welcome">
                                Welcome Back!
                            </Typography>
                        </ThemeProvider>
                    </LoginBoxHeader>

                    <LoginBoxBody src={BITLogo} />

                    <LoginBoxTitle>
                        <ThemeProvider theme={theme}>
                            <Typography variant="Title">
                                BIT Invoice Portal
                            </Typography>
                        </ThemeProvider>
                    </LoginBoxTitle>

                    <LoginBoxButton>
                        <LoginBoxHighlight>
                            <GoogleLogin
                                clientId={clientId}
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                className="GoogleSignin"
                            />
                        </LoginBoxHighlight>
                    </LoginBoxButton>
                    
                    <LoginBoxFooter>
                        <ThemeProvider theme={theme}>
                            <Typography variant="Footer">
                                Sign In With Your BIT Account
                            </Typography>
                        </ThemeProvider>
                    </LoginBoxFooter>
                </LoginBox>
            </LandingPageContainer>
    );
}

export default LandingPage;