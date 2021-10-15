import '../../css/style.css';
import React, { useState } from 'react';
import EdiText from 'react-editext'
import contactIcon from '../../icons/contact.svg'

function Contact(props) {

  const [value, setValue] = useState('');
  const [count, setCount] = useState(1);

  const defaultList = [
    {
      property:"address",
      value:"S2 Ashirwad Apartment",
      deleteicon:false
    },
    {
      property:"phone",
      value:"+91 9600110322",
      deleteicon:false
    },
    {
      property:"E-Mail",
      value:"babudeepak24@yahoo.co.in",
      deleteicon:false 
    },
  ] ;

  const [contacts, setcontacts] = React.useState(defaultList)

 
  const addContact = () => setcontacts(state => [...state, {     
    property:"Sample",
    value:"Sample",
    deleteicon:false 
  }])

  const removeContact=(indexVal)=>{
    const temp = [...contacts];
    temp.splice(indexVal, 1);
    setcontacts(temp)
  }

  const hoverContact=(indexVal)=>{
    let newArr = [...contacts]; 
    newArr[indexVal].deleteicon = true;
    setcontacts(newArr);
  }

  const leaveContact=(indexVal)=>{
    let newArr = [...contacts]; 
    newArr[indexVal].deleteicon = false;
    setcontacts(newArr);
  }

  const handleSave = (val) => {
    console.log('Edited Value -> ', val);
    setValue(val);
  };

  return (
    <div className="left-widget">
      <h3 className="title"><span className="icon"><img src={contactIcon}/></span>contact</h3>
      <button className="addbutton" onClick={() => addContact()}>Add Contact</button>
      {
        contacts.map((item,i)=>{
          return(
            <div className="contact-details" key={i}
              onMouseOver={() => hoverContact(i)}
              onMouseLeave={() => leaveContact(i)}
            >
              <button className={"delete-btn "+ (item.deleteicon?"contactlist":"")} onClick={() => removeContact(i)}>X</button>
              <EdiText
                  className="sub-title"
                  showButtonsOnHover
                  type='text'
                  value={item.property}
                  onSave={handleSave}
              />
              <EdiText
                  className="normal-text"
                  showButtonsOnHover
                  type='textarea'
                  value={item.value}
                  onSave={handleSave}
              />
            </div>
          )
        })
      }     
  </div>
  );
}

export default Contact;
