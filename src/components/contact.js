import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const logo = require('../img/WrapSharks.jpg');

class Contact extends Component {
  render() {
    return(
      <div className='contact-body'>
        <Grid className='contact-grid' style={{ marginTop: '20px', paddingBottom: '1.25em' }}>
          <Cell col={4}>
            <img
              src={logo}
              alt="logo"
              style={{ height: '11em' }}
            />
          </Cell>
          <Cell col={8}>
            <h2>Contact Us</h2>
            <hr/>
            <div className="contact-list">
              <p>Southern Printing & Graphics<br/>
                5424 Hixson Pike<br/>
                Hixson, TN 37343<br/>
                <br/>
                Phone: 423-843-3182<br/>
                Fax: 423-843-1940<br/>
                Email: southernpg@cs.com</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
