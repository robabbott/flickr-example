import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header module">
        <h1 className="hdg hdg--1"><a className="header__home" href="/">Flickr Connection Example</a></h1>
        <h2 className="hdg hdg--2">"Cancun"</h2>
      </header>
    );
  }
}

export default Header;