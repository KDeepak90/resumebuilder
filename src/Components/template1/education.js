import '../../css/style.css';
import React, { useState } from 'react';
import EdiText from 'react-editext'
import educationIcon from '../../icons/education.svg'

function Education(props) {
  return (
    <div class="left-widget">
        <h3 class="title"><span class="icon"><img src={educationIcon}/></span>Education</h3>
        <div class="education-details">
            <p class="degree">B.Tech Information Technology</p>
            <p class="institution-name">SRR Engineering College, Chennai</p>
            <p class="duration">2008 - 2012</p>
            <p class="percentage">GPA: 68.30</p>
        </div>

        <div class="education-details">
            <p class="degree">XII - Computer Science</p>
            <p class="institution-name">Bharath Senior Secondary School, Chennai</p>
            <p class="duration">2007 - 2008</p>
            <p class="percentage">GPA: 57.60</p>
        </div>

        <div class="education-details">
            <p class="degree">X</p>
            <p class="institution-name">Bharath Senior Secondary School, Chennai</p>
            <p class="duration">2005 - 2006</p>
            <p class="percentage">GPA: 71</p>
        </div>
    </div>
  );
}

export default Education;
