import React, { useState } from 'react';
import AddCompany from './addCompany'
import workHistoryIcon from '../../icons/workhistory.svg'

function CompanyExperience(props) {

  const [count, setCount] = useState(1);

  const onSubmit=(formState)=> {
    // const temp = [...menuItems];
    // temp.splice(formState, 1);
    // menuItems(temp)    
  }

  let menuItems = [];
  
  for (var i = 0; i < count; i++) {
    menuItems.unshift(<AddCompany 
      count={i}
      name="Senior Associate"
      onSubmit={onSubmit}
      />);
  }  


  return (
    <div className="right-container company">
        <h3 className="title"><span className="icon"><img src={workHistoryIcon} /></span>Work History</h3>
        <button className="addbutton" onClick={() => setCount(count + 1)}>Add exp</button>        
        {/* {menuItems}   */}
        <AddCompany 
          count={i}
          name="Senior Associate"
          onSubmit={onSubmit}
        />
    </div>
  );
}

export default CompanyExperience;
