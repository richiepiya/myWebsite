import React, { Component } from 'react';

class ContactPage extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="section-category">
          <div className="morePageImg"></div>
          <div id="moreImg"></div>
        </div>

        <div className="section-info">
          <div id="workContainer">
            <div id="subjectHeader">UNI.ON Technologies - Montreal, QC</div>
            <div id="workTitle"><strong>SOFTWARE DEVELOPER</strong></div>

            <hr id="subjectLineWork"></hr>
            <br />

            <div id="workContent">
              <div id="subjectHeader"><strong>THE TASK</strong></div>
              <br />
              <div id="workContent">UNI.ON Technologies was a student-run startup whose goal was to develop Reached: a social networking application that allowed university students to plan and coordinate nights out.
                <br /><br />
                My tasks
                <ul>
                  <li>Created custom pages and layouts for the onboarding process</li>
                  <li>Created NoSQL databases to store user information and a record of events the user attended using AWS</li>
                </ul>
              </div>

              <div id="subjectHeader"><strong>THE JOURNEY</strong></div>
              <br />
              <div id="workContent">This was my first work experience and introduction to software development outside of the classroom. I was able to apply the programming skills I developed from my classes and my eye for design to create responsive, user-friendly UIs.</div>

              <div id="subjectHeader"><strong>THE SOLUTION</strong></div>
              <br />
              <div id="workContentLast">placeholder...</div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ContactPage;
