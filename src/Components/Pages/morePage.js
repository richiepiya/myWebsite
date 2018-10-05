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

        <div className="section-info">
          <div id="workContainer">
            <div id="subjectHeader">Pratt & Whitney Canada - Longueuil, QC</div>
            <div id="workTitle"><strong>WEB SPECIALIST</strong></div>

            <hr id="subjectLineWork"></hr>
            <br />

            <div id="workContent">
              <div id="subjectHeader"><strong>THE TASK</strong></div>
              <br />
              <div id="workContent">As a member of the SharePoint team, I worked on various projects for the corporate app store and collaborative websites as well as the development of new web applications.
                <br /><br />
                My tasks
                <ul>
                  <li>Created SharePoint sites for new collaborative projects</li>
                  <li>Managed existing internal web pages</li>
                  <li>Updated intranet functionalities using RESTful web services</li>
                  <li>Provided consulting services to internal customers and delivered potential solutions, including testing and training</li>
                </ul>
              </div>

              <div id="subjectHeader"><strong>THE JOURNEY</strong></div>
              <br />
              <div id="workContent">This internship was my first opportunity to learn and work on production-scale web applications. I was able to apply the coding skills I developed from my classes and from the summer prior to create useful features and web pages. I was also able to apply and improve upon my time management and interpersonal skills since I worked directly with key stakeholders under strict deadlines.</div>

              <div id="subjectHeader"><strong>THE SOLUTION</strong></div>
              <br />
              <div id="workContentLast">Unfortunately, all solutions and web applications belong to Pratt & Whitney's internal SharePoint site and cannot be shown publicly. Please feel free to contact me if you'd like to know more!</div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default MorePage;
