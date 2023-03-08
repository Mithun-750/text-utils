import React, { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Playground from './components/Playground/Playground';

// import { Routes, Route } from 'react-router-dom';

// import {
//   BrowserRouter as Router
// } from "react-router-dom";


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  const [mode, setmode] = useState('light')
  const [modetxt, setmodetxt] = useState('☀')
  const handlemode = () => {
    if (mode === 'light') {
      setmode('dark')
      setmodetxt('☾')
    } else {
      setmode('light')
      setmodetxt('☀')
    }
  }

  return (

    <>
      <Router>
        <div className={`supreme_${mode}`}>

          <Navbar
            className={`nav_${mode}`}
            logo='TextUtils'
            navsec1={<Link to="/">Home</Link>}
            navsec2={ <Link to="/about">About</Link>}
            navsec3={
              <button id="enable" className={`enable_${mode}`} onClick={handlemode}>{mode + ' ' + modetxt}</button>
            }

          />

          <Routes>
            <Route path="/about" element={<About crmode={mode} />} />
            <Route path="/" element={<Playground crmode={mode} />} />
          </Routes>

        </div>
      </Router>
    </>

  );
}

export default App;
