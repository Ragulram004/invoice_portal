//Dependencies

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components

import LandingPage from './Landing Page/LandingPage.js';
import HomePage from './Home Page/HomePage.js';
import Logout from './components/logout';
// import Home from './components/home';
import Admin from './components/admin';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path='/Home' Component={HomePage} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admin' element={<Admin />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
