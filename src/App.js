import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
          <Header transparent={true} title={<Link className="appHeader" to="/">Wrap Sharks</Link>} scroll>
              <Navigation>
              {/* <Link style={{fontSize: '0.7em'}} to="/about">About</Link> */}
                <Link style={{fontSize: '0.7em'}} to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: '#555'}} to="/">Wrap Sharks</Link>}>
              <Navigation>
                {/* <Link to="/about">About</Link> */}
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content className='content'>
              <Main/>
          </Content>
          <Footer size="mini">
            <FooterSection className="appFooter" logo="Wrap Sharks">
                <FooterLinkList>
                  <a href="/">Home</a>
                  {/* <a href="/about">About</a> */}
                  <a href="/contact">Contact</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
