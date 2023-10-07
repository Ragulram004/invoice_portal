import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import BIT from "./images/BIT.png";
import { useEffect } from "react";
import { gapi } from 'gapi-script';
import React, { useState } from "react";
import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENTID;

const OuterContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #CBD0DD; `

const InnerContainer = styled.div`
    background-color: white;
    height: 50vh;
    width: 10vw;
    padding: 10em;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    line-height: 5em; `

const HeaderText = styled.h6`
    font-size: 10px;
    font-weight: 600;
    line-height: 1.24;
    color: #black;
    opacity: 0.7;
`;

const Logo = styled.img`
    image-height: 10em;
    image-width: 10em;
    // width: 100px;
    // height: 100px;
    // margin-bottom: 10px;
    // margin-top: 10px;
    // border-radius: 50%;
    // border: 1px solid #black;
    // padding: 5px;
    // background-color: white;
    // box-shadow: 0 0 0 2px #black;
    // transition: all 0.5s ease;
    // cursor: pointer;
    // &:hover {
    //     box-shadow: 0 0 0 3px #black;
    // }

`;

const FooterText = styled.h6`
    font-size: 10px;
    font-weight: 600;
    line-height: 1.24;
    color: #black;
`;

// const SigninButton = styled.button`
//     color: #black;
//     text-align: center;
//     font-size: 2em;
//     cursor: pointer;
//     transition: all 0.5s ease;
//     &:hover {
//         background-color: #black;
//         color: #white;
//     }
// `;

const Login = () => {

    const [email, setEmail] = useState({ email: ""});

    const onSuccess = async (res) => {

        // console.log("Login Success: currentUser:", res.profileObj.email);
        setEmail({ email: res.profileObj.email });
        // window.location.href = "/Home";
        try {
            const response = await axios.post('http://localhost:3001/getUsers', email);
            console.log(response);
            if (response.status === 200) {
                console.log('Data saved successfully');
                window.location.href = "/Home";
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
            <OuterContainer>
                <InnerContainer>
                    <HeaderText>Welcome Back!</HeaderText>
                    <Logo src={BIT} alt="logo" />
                    <p>BIT INVOICE PORTAL</p>
                    {/* <SigninButton> */}
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                    {/* </SigninButton> */}
                    <FooterText>Sign in with your BIT account</FooterText>
                </InnerContainer>
            </OuterContainer>
    );
}

export default Login;