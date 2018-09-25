import React, { Component } from 'react';
import $ from 'jquery';

class MorePage extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="section-category">
          <div className="morePageImg"></div>
          <div id="moreImg"></div>
        </div>

        <div className="section-info" onScroll={fadeScroll}>
          <div id="moreContainer">
            <h2 className="fade-scroll" id="moreTitle">More about me</h2>
            <br></br>
            <p id="moreContent">sample text.</p>
          </div>
        </div>

      </div>
    );
  }
  }
  function fadeScroll() {
  $(".fade-scroll").css("opacity", 1 - ($(".section-info").scrollTop())/100);
  }

export default MorePage;
