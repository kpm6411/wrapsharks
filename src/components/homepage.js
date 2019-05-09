import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Homepage extends Component {
  render() {
    return(
      <div>
        <Grid className="grid">
          <Cell col={12}>
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.motortrend.com%2Ff%2Feditorial%2Fsema-2007-the-good-the-bad-and-the-ugly%2F7240928%2Bw700%2Bcr1%2Bre0%2Bar1%2Fflying-tiger-trans-am.jpg&f=1" alt="Logo" className="logo" />
            <div className="banner">
              <h1>Wrap Sharks</h1>
              <hr/>
              <p>Adverize your company with a car wrap!</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Homepage;
