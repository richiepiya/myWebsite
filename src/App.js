import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//css
import './App.css';
//Components
import Header from './Components/header';
import HomePage from './Components/Pages/homePage';
import AboutPage from './Components/Pages/aboutPage';
import WorkPage from './Components/Pages/workPage';
import MorePage from './Components/Pages/morePage';
import ContactPage from './Components/Pages/contactPage';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/more" component={MorePage} />
          <Route exact path="/contact" component={ContactPage} />

      </div>
      </Router>
    );
  }
}

export default App;
