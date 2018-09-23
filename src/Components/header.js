import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="myHeader">
        <div className="logo"></div>

        <nav className="navTabs">
          <ul className="tabContainer">
            <li className="tab">
              <Link to="/" id="home">HOME</Link>
            </li>
            <li className="tab">
              <Link to="/about" id="about">ABOUT</Link>
            </li>
            <li className="tab">
              <Link to="/work" id="work">WORK</Link>
            </li>
            <li className="tab">
              <Link to="/more" id="more">MORE</Link>
            </li>
            <li className="tab-last">
              <Link to="/contact" id="contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
