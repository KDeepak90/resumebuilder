import '../../css/style.css';
import React, { useState } from 'react';
import EdiText from 'react-editext'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function AddCompany(props) {
  const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);

    const handleSave = (val) => {
      console.log('Edited Value -> ', val);
      setValue(val);
    };



  return (
    <div className="company-experience">        
          <div className="right-widget">            
              <div className="years-exp">
                  <p>2018-12 -</p>
                  <p>Current</p>
              </div>
              <div className="word-details">                  
                  <EdiText
                      className="company-designation"
                      showButtonsOnHover
                      type='text'
                      value={props.name +" "+ props.count}
                      onSave={handleSave}
                  />
                  <button className="addbutton" onClick={()=>props.onSubmit(props.count)}>Del exp</button>
                  <h4 className="company-name">Banca Sella , Chennai </h4>                  
                  <div className="project-details">
                    <button>+</button>
                      <button>x</button>
                      <p className="project-title">Investment App,<button>Edit</button></p>
                      <p className="project-desc">App used for buying and selling shares and shares detailed graphical representations. Using React-Native.</p>
                      <ul>                        
                          <li>Components designing for Datalist, Loader, Button, Visuals, View, Input.</li>
                          <li>Redux flow for each action with Interface and interceptor typescript.</li>
                          <li>UI development for all screens with the components.</li>
                      </ul>    
                  </div>
              </div>   
              <PureModal
                header="Your header"
                footer={
                  <div>
                    <button>Save</button>
                    <button>Cancel</button>                    
                  </div>
                }
                isOpen={modal}
                closeButton="x"
                closeButtonPosition="header"
                onClose={() => {
                  setModal(false);
                  return true;
                }}
              >
                <p>Your content</p>
              </PureModal>      
          </div>
    </div>
  );
}


export default AddCompany;
