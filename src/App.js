import React from "react";
import Navbar from "../src/Component/Home/Navbar/Navbar";
import Home from '../src/Component/Home/HomeALL/Home';
import About from '../src/Component/Home/HomeALL/About';
import Project from '../src/Component/Project/Project';
import Stack from '../src/Component/Stacking/Stack';
import Footer from '../src/Component/Home/Footer/Footer';
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
