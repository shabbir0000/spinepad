import React from "react";
import Navbar from "./Navbar";
import Home from './Home';
import About from './About';
import Project from './Project';
import Stack from './Stack';
import Footer from './Footer'
import { Route, Routes } from "react-router-dom";



const App = () => {
  return (
   <>
      <Navbar/>
    <Routes>
     
      <Route path="/*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path='/Stack' element={<Stack />} />

    </Routes>
     <Footer/>
    </>
  );
};

export default App;
