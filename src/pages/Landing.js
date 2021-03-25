import React from 'react';

import Nav from '../components/Nav';
function Landing(props) {
  return (
    <div className="landing_page">
      <Nav />
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
