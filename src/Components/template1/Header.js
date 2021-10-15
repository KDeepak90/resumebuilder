import '../../css/style.css';
import React, { useState } from 'react';
import EdiText from 'react-editext'

function Header(props) {
    const [value, setValue] = useState('');

    const handleSave = (val) => {
      console.log('Edited Value -> ', val);
      setValue(val);
    };
  return (
    <div className="header">
        <EdiText
            className="name"
            showButtonsOnHover
            type='text'
            value={props.name}
            onSave={handleSave}
        />
        <EdiText
            className="designation"
            showButtonsOnHover
            type='text'
            value={props.designation}
            onSave={handleSave}
        />
        <EdiText
            className="normal-text"
            showButtonsOnHover
            type='textarea'
            value={props.desc}
            onSave={handleSave}
        />
    </div>
  );
}

export default Header;
