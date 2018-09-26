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

        <div className="section-info">
          <div id="workContainer">
            <div id="subjectHeader">RBC Royal Bank - Toronto, ON</div>
            <div id="workTitle"><strong>AMPLIFY DEVELOPER</strong></div>

            <hr id="subjectLineWork"></hr>
            <br />

            <div id="workContent">
              <div id="subjectHeader"><strong>THE TASK</strong></div>
              <br />
              <div id="workContent">The Amplify program is RBC's summer innovation program that lets students apply their skills to build a product that could disrupt how RBC operates. My team and I were assigned a business challenge from RBC Ventures. Our goal? Help Canadians understand what it's like to live in a neighborhood without actually moving there.
                <br /><br />
                My tasks
                <ul>
                  <li>Developed features that integrated data from the City of Toronto with the Google Maps API</li>
                  <li>Collaborated with designer to create website UI/UX</li>
                  <li>Developed responsive family-friendly interface</li>
                  <li>Conducted market research to identify and analyze user needs</li>
                </ul>
              </div>

              <div id="subjectHeader"><strong>THE JOURNEY</strong></div>
              <br />
              <div id="workContent">To better understand the problem, my team and I conducted market research with real Canadians. Our goal was to find the root of their problems when searching for areas to live in. From this, we were able to identify user needs and the findings helped us ideate possible solutions. Throughout the summer, we kept in close contact with the RBC Ventures team for support and guidance and this ultimately helped us create our solution.</div>

              <div id="subjectHeader"><strong>THE SOLUTION</strong></div>
              <br />
              <div id="workContentLast">The solution we came up with was Relevent. A hyperlocal community event finder, personalized to each user's lifestyle. By finding events in an area, Relevent helps users explore the community and understand what life could be like there.</div>

              <div id="imgContainer">
                <div id="releventImg"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default WorkPage;
