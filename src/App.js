import React from 'react';
import './App.css';
import Home from './compotents/home/home'
import Navbar from './compotents/navbar/navbar';
import Techstack from './compotents/techstack/techstack';
import Contact from './compotents/contact/contact';
import Projects from './compotents/projects/project';

function App(){
  return (
    <>
    <Home />
    <Navbar />
    <Techstack/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
