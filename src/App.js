// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Userform from './components/userform';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route exact path='/show/:id' element={< Show />}></Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Userform />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
