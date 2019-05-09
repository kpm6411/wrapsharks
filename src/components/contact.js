import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className='contact-body'>
        <Grid className='contact-grid' style={{ marginTop: '20px', paddingBottom: '1.25em' }}>
          <Cell col={4}>
            <h3>Wrap Sharks</h3>
            <img
              src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fsavannahisamazing.files.wordpress.com%2F2011%2F04%2F10658-2-sharks_-_4.jpg&f=1"
              alt="portrait"
              style={{ height: '8em' }}
            />
          </Cell>
          <Cell col={8}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '1.5em', fontFamily: 'sans-serif', justifyContent: 'center' }}>
                    email
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
