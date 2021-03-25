import React from 'react';
import Nav from '../components/Nav';
import Logo from '../assets/images/mini_logo.png';
import LoginForm from '../components/LoginForm';

function Signin(props) {
  return (
    <div className="onboarding">
      <Nav />
      <section className="main signin_main">
        <div className="centered_div">
          <img src={Logo} alt="logo" className="small_logo" />
          <div className="login_form">
            <h3 className="form_header">Sign in to your account</h3>
            <LoginForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
