import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function ContactUs() {
  const contactStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")`,
    height: '90vh',
    marginTop: '-26.5px',
    fontSize: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  const font = {
    background:'skyblue'
  };
  const fontColor = {
    color: '#87ceeb',
    position: 'relative',
    top: '70px',

  }

  const location = useLocation()
  const { from } = location.state
  return (
    <div style={contactStyle}>
      <h1 style={font}>Welcome to Contact Us Page. </h1>
      <h2 style={fontColor}>the data :{from}</h2>
      <Link exact className="backBtn" to="/">Go Back</Link>

    </div>
  );
}

export default ContactUs;
