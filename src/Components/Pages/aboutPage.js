import React, { Component } from 'react';
import $ from 'jquery';

class AboutPage extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="section-category">
          <div className="aboutPageImg"></div>
          <div id="aboutImg"></div>
        </div>

        <div className="section-info" onScroll={fadeScroll}>
          <div id="aboutContainer">
            <div className="fade-scroll" id="subjectHeader">Hello! My name is Richie.</div>
            <div className="fade-scroll" id="aboutTitle"><strong>I’m a developer and designer from Toronto living in Montreal.</strong></div>
            <hr id="subjectLineAbout"></hr>

            <br />
            <p id="aboutContent">I’m currently in my last semester of Computer Engineering at McGill University. I’ve previously interned at RBC’s Amplify program and at Pratt & Whitney Canada where I built exciting webapps for internal and external clients. I love creating awesome interfaces and working on personal projects to solve real life problems. In my free time, I enjoy playing the violin and the piano, travelling the world, and finding great deals on eBay!</p>
          </div>
        </div>

      </div>
    );
  }
}
function fadeScroll() {
  $(".fade-scroll").css("opacity", 1 - ($(".section-info").scrollTop())/120);
}

export default AboutPage;
