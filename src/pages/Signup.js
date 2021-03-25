import React from 'react';
import Nav from '../components/Nav';
import Logo from '../assets/images/mini_logo.png';
import SignUpForm from '../components/SignupForm';
import SignupInfoCard from '../components/SignupInfoCard';
function Signup(props) {
  return (
    <div className="onboarding">
      <Nav />
      <section className="main signup_main">
        <div className="centered_div_signin">
          <div className="info_div mobile_display_none">
            <img src={Logo} alt="logo" className="small_logo" />
            <div className="info_div_body">
              <SignupInfoCard>
                <header>Get started quickly</header>
                <p>Sign up with MulpX with ease in 30 seconds</p>
              </SignupInfoCard>
              <SignupInfoCard>
                <header>Send Multiple Payment</header>
                <p>Sign up with MulpX with ease in 30 seconds</p>
              </SignupInfoCard>
              <SignupInfoCard>
                <header>Multiple Airtime Subscription</header>
                <p>Sign up with MulpX with ease in 30 seconds</p>
              </SignupInfoCard>
            </div>
          </div>
          <div className="signup_form">
            <h3 className="form_header">Create Your MulpX account</h3>
            <SignUpForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
