import React, { Component } from 'react';
import Typed from 'react-typed';

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid homePageImg">
        <div id="myName"><strong>RICHIE PIYA</strong></div>
          <div id="myInfo">
            <Typed
              strings={[
                "DEVELOPER. DESIGNER. DOG LOVER."
              ]}
              typeSpeed={40}>
            </Typed>
          </div>
      </div>
    );
  }
}

export default HomePage;
