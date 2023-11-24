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
const API_URL = process.env.REACT_APP_API_URL;

function LandingPage() {

    const [email, setEmail] = useState('');

    const onSuccess = async (res) => {

        // const [email, setEmail] = useState('');

        // console.log("Login Success: currentUser:", res.profileObj.email);
        const Email = await res.profileObj.email;
        await setEmail(Email);
        console.log(email);
        console.log(res.profileObj.email);
        console.log(`email --- ${Email}`);
    };
    console.log(email);
    if (email) {
        console.log("Loging gmail");
        const gettingData = async () => {
        try {
            console.log('Sending data...');
            const response = await axios.post(`${API_URL}/getUsers`, {email: email});
            console.log(response);
            if (response.status === 200) {
                console.log('Data saved successfully');
                Cookies.set('token', response.data.accesstoken);
                if(response.data.role === "student"){
                    console.log(response.data.role);
                    window.location.href = "/Home"}
                // window.location.href = "/Home"}
                else if (response.data.role === "faculty"){
                    console.log(response.data.role);
                    window.location.href = "/Home-Faculty"
                }
                else {
                    console.log("User not found in DB Login Error");
                }   
            } else {
                console.log(response);
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('(axios) -> An error occurred:', error);
        } };
        gettingData();            
    }
    else {
        console.log("Login again");
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