import React from 'react';

import Hamburger from '../assets/images/hambugger.png';
import LogoPNG from '../assets/images/Logo.png';

import { useHistory } from 'react-router-dom';

function Nav(props) {
  const history = useHistory();
  return (
    <nav>
      <div className="logo">
        <img src={LogoPNG} alt="logo" />
      </div>
      <ul className="menu mobile_display_none">
        <li>Send Multiple Payment</li>
        <li>Multiple Recharge</li>
        <li>Resources</li>
        <li>Pricing</li>
        <button
          className="btn btn_primary"
          onClick={() => history.push('/signin')}
        >
          {'Sign In >'}
        </button>
        <button
          className="btn btn_secondary"
          onClick={() => history.push('/signup')}
        >
          Get Started
        </button>
      </ul>
      <ul className="mobile_menu desktop_hidden">
        <li>Login</li>
        <button className="hambugger" id="hambugger">
          <img src={Hamburger} alt="hambugger" />
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
