import { useLocation } from 'react-router-dom';
import React from 'react';

function ContactUs() {
  const contactStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")`,
    height: '90vh',
    marginTop: '-26.5px',
    fontSize: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const font = {
    background:
      'radial-gradient(circle, rgba(199,160,99,1) 8%, rgba(19,42,99,1) 18%)',
  };

  const location = useLocation()
  const { from } = location.state
  return (
    <div style={contactStyle}>
      <h1 style={font}>Welcome to Contact Us Page. </h1>
      <h2>the data :{from}</h2>
    </div>
  );
}

export default ContactUs;
