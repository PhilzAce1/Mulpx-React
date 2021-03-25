import React from 'react';
import BlueMarkerSVG from 'assets/images/blue_marker.svg';

const SignupInfoCard = ({ children }) => (
  <div className="info_div_card_container">
    <img src={BlueMarkerSVG} alt="blue marker" />{' '}
    <div className="info_div_card">{children}</div>
    <hr />
  </div>
);

export default SignupInfoCard;
