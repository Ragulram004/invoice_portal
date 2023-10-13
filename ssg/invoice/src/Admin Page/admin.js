import styled from "styled-components";
import React, { useState } from "react";
import axios from 'axios';

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #CBD0DD; `

const InnerContainer = styled.div`
    background-color: white;
    padding: 10em;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    line-height: 5em; `

const Admin = () => {

    const [email, setEmail] = useState({ email: ""});

    const handlechange = (event) => {
        setEmail({ email: event.target.value });
        console.log(email);
    }

    const addUsers = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/addUsers', email);
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
    }


    const getUsers = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/addUsers', email);
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
    }

    return(
        <OuterContainer>
            <InnerContainer>
                <form>
                    <input onChange={handlechange} type="text" placeholder="Enter users email" />
                    <button onSubmit={addUsers}>add users</button>
                    <button onSubmit={getUsers}>remove users</button><br></br>
                    <input onChange={handlechange} type="text" placeholder="Enter staff email" />
                    <button onSubmit={getUsers}>add staff</button>
                    <button onSubmit={getUsers}>remove staff</button>
                </form>
            </InnerContainer>   
        </OuterContainer>
 
    );

}

export default Admin;