import React, { Component } from 'react';
import $ from 'jquery';

class WorkPage extends Component {
render() {
  return (
    <div className="container-fluid">

      <div className="section-category">
        <div className="workPageImg"></div>
        <div id="workImg"></div>
      </div>

      <div className="section-info" onScroll={fadeScroll}>
        <div id="workContainer">
          <h2 className="fade-scroll" id="workTitle">Work work work</h2>
          <br></br>
          <p id="workContent">sample text.</p>
        </div>
      </div>

    </div>
  );
}
}
function fadeScroll() {
$(".fade-scroll").css("opacity", 1 - ($(".section-info").scrollTop())/100);
}

export default WorkPage;
