import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col} from 'reactstrap'
import './scss/style.scss';
import Youtube from '@u-wave/react-youtube'

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
                <title>{'home work1 - video'}</title>
            </Helmet>
            <MyNavbar />
            <Container fluid className='p-0 m-0'> 
              <MyJumbotron/>
              <Row >
                <Col xl="2" md="4"  xs="12"><SideBar cur={'music'}/></Col>
                <Col xl="10" md="6"  xs="12"> 
                    <div className={"mainContent row"}>
                    <Col sm="12" md="12">
                      <h3>{'不知道要放什麼影片所以就放這個吧'}</h3>
                    </Col>
                    <Col sm="12" md="12">
                      <h4>{'【SSSS.GRIDMAN OP Full】UNION (OxT) Live ver.【オーイシマサヨシ グリッドマン フル】'}</h4>
                    </Col>
            
                    <Youtube video={'N7ThSmZh7MM'} width={'720'} height={'360'}  className={'col-xs-12 col-md-6 offset-md-3'}/> 
                  
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