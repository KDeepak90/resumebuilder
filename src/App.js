import React, { useState } from 'react';
import './App.css';
import Header from './Components/template1/Header'
import CompanyExperience from './Components/template1/companyExp'
import LeftContainer from './Components/template1/leftContainer'


function App() {

  return (
    <div className="App">
      <Header
        name="DEEPAK KARNAN"
        designation="Frontend Developer"
        desc="Skilled and fast learning Web developer with 8 years of experience in Html5, Css3, ReactJS, Jquery, JavaScript,Typescript and website development."
      />
      <div className="container">
        <LeftContainer/>
        <CompanyExperience/>
      </div>
      
    </div>
  );
}

export default App;
