import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import BackgroundFigures from './images/BackgroundFigures.jpg';
import DropdownContacts from './components/DropdownContacts';
import DropdownAccounts from './components/DropdownAccounts';

const contacts = [
  {
    id: 1,
    contactNum: '0124858909',
  },
  {
    id: 2,
    contactNum: '2084406435',
  },
  {
    id: 3,
    contactNum: '0038396640',
  },
  {
    id: 4,
    contactNum: '0129272638',
  },
];

const accounts = [
  {
    id: 1,
    accountType: 'BANKACCOUNT',
    accountNum: '***************4132',
  },
  {
    id: 2,
    accountType: 'MASTERCARD',
    accountNum: '***************4222',
  },
  {
    id: 3,
    accountType: 'VISA',
    accountNum: '***************1234',
  },
];

function App() {

  const [value1, setValue1] = useState(null)
  const [value2, setValue2] = useState(null)

  return (
   <Router>
      <div className='ContainerBackgroundFigures' style={{ backgroundImage: `url(${BackgroundFigures})` }}>

        {/* Navbar */}
        <nav className='navbar'>
            <div className='navbar-container'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            <i className='fa fa-arrow-left'/>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Continue
                        </Link>
                    </li>
                </ul>
            </div>   
        </nav>

        <DropdownContacts 
          contacts={contacts} 
          prompt='Selected Contacts' 
          id='id'
          label='contactNum'
          value1={value1} 
          onChange={val => setValue1(val)}
        />

        {/* Amount to Send */}
        <div className='ContainerAmountSend'>
          <div className="ContainerPeople">
              <p>Total amount sending to 4 people</p>
          </div>
          <div className='ContainerAmount'>
              <div className='AmountSendValue'>
                  <h2>₦130,000</h2>
              </div>
          </div>
        </div>

        <DropdownAccounts 
          accounts={accounts} 
          prompt='Select Account' 
          id='id'
          label='accountNum'
          accountType='accountType'
          value2={value2} 
          onChange={val => setValue2(val)}
        />
        
        {/* Submit Button */}
        <div className='ContainerButton'>
          <Button variant="primary" className='SubmitButton'>Continue</Button>
        </div>
        
        
      </div>      
   </Router>
  );
}

export default App;
