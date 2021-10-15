import '../../css/style.css';
import React, { useState } from 'react';
import EdiText from 'react-editext'
import skillIcon from '../../icons/skill.svg'

function Skill(props) {
  return (
    <div class="left-widget skill">
        <h3 class="title"><span class="icon"><img src={skillIcon}/></span>Skills</h3>
        <p class="normal-text"><b>HTML, CSS, ReactJS, React – Native, Javascript, Jquery</b></p>
        <p class="normal-text"><b>CSS Preprocessor :</b> SASS, LESS</p>
        <p class="normal-text"><b>CSS Framework :</b> Bootstrap, Foundation, Skeleton, Tailwind</p>
    </div>
  );
}

export default Skill;
