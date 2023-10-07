import React from 'react';
import Logout from './logout';
import { useState } from 'react';

function Home() {

    const [email, setEmail] = useState({ email: ""});

    
    const addUser = (event) => {
        event.preventDefault();
        console.log("add user");
    }

    const removeUser = (event) => {
        event.preventDefault();
        console.log("remove user");
    }


    return (
    <>
    <Logout />
    <form>
        <input type="text" placeholder="Enter your email" />
        <button onSubmit={addUser}>add</button>
        <button type="submit" onSubmit={removeUser}>remove</button>
    </form>
    </>
    );

}

export default Home;