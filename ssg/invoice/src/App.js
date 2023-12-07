//Dependencies

import React from 'react';
import { InvoiceProvider } from './InvoiceContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Navbar from './components/Navbar.js';
import LandingPage from './Landing Page/LandingPage.js';
import HomePage from './Home Page/HomePage.js';
import HomePageFaculty from './Home Page Faculty/HomePageFaculty.js';
import Apply from './ApplyInvoice/Apply.js';
// import Home from './components/home';
import Admin from './Admin Page/admin.js';
import DashBoard from './DashBoard/Dashboard.js'

const App = () => {

  return (
    <div className="App">
      <InvoiceProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path='/DashBoard'  Component={DashBoard} />
            <Route path='/Home' Component={HomePage} />
            <Route path='/Home-Faculty' Component={HomePageFaculty} />
            <Route path='/Apply' Component={Apply} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </InvoiceProvider>
      
    </div>
  );
}

export default App;
