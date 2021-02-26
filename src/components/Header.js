import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header module">
      <h1 className="hdg hdg--1"><Link className="header__home" to="/">Flickr Connection Example</Link></h1>
      <h2 className="hdg hdg--2">"Cancun"</h2>
    </header>
  );
}

export default Header;