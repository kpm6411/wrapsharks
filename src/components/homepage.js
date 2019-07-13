import React, { Component } from 'react';

const logo = require('../img/Wrap_Sharks_Horizontal_logo.jpg');

class Homepage extends Component {
  render() {
    return(
      <div>
        <div style={{ width: '100%', background: 'white' }}>
          <img src={logo} alt="Logo" className="jumbo"/>
        </div>
        <div className="banner">
          <h1>Wrap Sharks</h1>
          <hr/>
          <p><a target="_blank" rel="noopener noreferrer" href="http://www.southernprintingandgraphics.com/">Southern Printing & Graphics</a><br/>
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
