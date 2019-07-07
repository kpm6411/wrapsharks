import React, { Component } from 'react';

const logo = require('../img/Wrap_Sharks_Horizontal_logo.jpg');

class Homepage extends Component {
  render() {
    return(
      <div>
        <img src={logo} alt="Logo" className="logo" style={{width: '100%', border: '0.5em solid white'}}/>
        <div className="banner">
          <h1>Wrap Sharks</h1>
          <hr/>
          <p>Southern Printing & Graphics<br/>
            5424 Hixson Pike<br/>
            Hixson, TN 37343<br/>
            <br/>
            Phone: 423-843-3182<br/>
            Fax: 423-843-1940<br/>
            Email: southernpg@cs.com</p>
        </div>
      </div>
    )
  }
}

export default Homepage;
