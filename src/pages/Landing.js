import React from 'react';

import Hamburger from '../assets/images/hambugger.png';
import LogoPNG from '../assets/images/Logo.png';
function Landing(props) {
  return (
    <div className="landing_page">
      <nav>
        <div className="logo">
          <img src={LogoPNG} alt="logo" />
        </div>
        <ul className="menu mobile_display_none">
          <li>Send Multiple Payment</li>
          <li>Multiple Recharge</li>
          <li>Resources</li>
          <li>Pricing</li>
          <button className="btn btn_primary">{'Sign In >'}</button>
          <button className="btn btn_secondary">Get Started</button>
        </ul>
        <ul className="mobile_menu desktop_hidden">
          <li>Login</li>
          <button className="hambugger" id="hambugger">
            <img src={Hamburger} alt="hambugger" />
          </button>
        </ul>
      </nav>
      <section className="main">
        <article>
          <h1>Multiple Payment Solution For Businesses In Africa</h1>
          <p>
            Send money to many people, friends, business partners, employees at
            a go. Thousands of businesses use MulpX to send multiple payments,
            and manage their businesses online.
          </p>
          <button className="btn btn_tertiary btn_large">
            Get Started For Free
          </button>
        </article>
      </section>
    </div>
  );
}

export default Landing;
