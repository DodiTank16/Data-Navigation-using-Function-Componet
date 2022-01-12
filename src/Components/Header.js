import React from "react";
import { Link } from "react-router-dom";

function Header() { 
    return (<div>
        <ul>
    <li>
      <Link className="active" exact to="/">Home</Link>
    </li>
    <li>
      <Link exact to="/about">About Us</Link>
    </li>
    <li>
      {/* <Link exact to="/contact">Contact Us</Link> */}
    </li>
  </ul>
    </div>);
}
 
export default Header;