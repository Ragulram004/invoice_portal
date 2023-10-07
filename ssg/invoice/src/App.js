import LandingPage from './Landing Page/LandingPage.js';
import Logout from './components/logout';
// import Home from './components/home';
import React from 'react';
import Admin from './components/admin';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage}/>
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/logout' element={<Logout />} />
          <Route path='/admin' element={<Admin />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
