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
              <Link to="/" onClick={clickedHome} id={curPage==="home" ? "home":"home-b"}>HOME</Link>
            </li>
            <li className="tab">
              <Link to="/about" onClick={clickedAbout} id={curPage==="home" ? "about":"about-b"}>ABOUT</Link>
            </li>
            <li className="tab">
              <Link to="/work" onClick={clickedWork} id={curPage==="home" ? "work":"work-b"}>WORK</Link>
            </li>
            <li className="tab">
              <Link to="/more" onClick={clickedMore} id={curPage==="home" ? "more":"more-b"}>MORE</Link>
            </li>
            <li className="tab-last">
              <Link to="/contact" onClick={clickedContact} id={curPage==="home" ? "contact":"contact-b"}>CONTACT</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}
var curPage = "home";
function clickedHome() { curPage = "home"; }
function clickedAbout() { curPage = "about"; }
function clickedWork() { curPage = "work"; }
function clickedMore() { curPage = "more"; }
function clickedContact() { curPage = "contact"; }

export default Header;
