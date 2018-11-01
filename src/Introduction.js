import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col} from 'reactstrap'
import './scss/style.scss';
import mumi from './image/mumi.jpg';
import Youtube from '@u-wave/react-youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
        <div>
            <Helmet>
                <title>{'home work1 - Introduction'}</title>
            </Helmet>
            <MyNavbar/>
            <Container fluid className='p-0 m-0'> 
              <MyJumbotron />
              <Row >
                <Col xl="2" md="4"  xs="12"><SideBar cur={'index'}/></Col>
                <Col xl="10" md="6"  xs="12"> 
                  <div className={"mainContent"}>
                    <h2>完美姆咪世界到底是什麼?</h2>
                    <img src={mumi}/>
                    <p>其實我也不知道什麼是完美姆咪世界。</p>
                    <p>但是你一定要知道什麼是姆咪操</p>
                    <p>姆咪。</p>
                    <Youtube video={'IpPhvrSnFzQ'} width={'720'} height={'360'} />
                  </div>
                </Col>
              </Row> 
              <MyFooter/>
            </Container>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));