import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Followers from './components/followers';
import Following from './components/following';
import ProfileSection from './components/profile';
import Setting from './components/settings';

import Home from './components/Home';

const Name="kireva_denise"
const userName = "Denise Kireva";
const DOB = "19/04/2000"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileSection user={userName} name={Name} dob={ DOB}/>} />
          <Route path="/setting" element={<Setting user={userName} name={Name} dob={DOB} />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
