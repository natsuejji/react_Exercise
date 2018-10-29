import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import MyNavbar from './js/nav.js';
import SideBar from './js/side.js';
import MyFooter from './js/footer.js';
import MyJumbotron from './js/jumbotron.js';
import {Container, Row, Col} from 'reactstrap'
import './scss/style.scss';
import hana from './image/hana.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const jbimg ={
      backgroundImage: `url(${hana})`,
      backgroundColor: '#ffdad2'
    }
    return (
        <div>
            <Helmet>
                <title>{'home work1 - music'}</title>
            </Helmet>
            <MyNavbar cur={'music'} />
            <Container fluid className='p-0 m-0'> 
              <MyJumbotron backimg={jbimg} />
              <Row >
                <Col xl="2" md="4"  xs="12"><SideBar cur={'music'}/></Col>
                <Col xl="10" md="6"  xs="12"> 
                  <h1>{window.location.pathname}</h1>
                </Col>
              </Row> 
              <MyFooter/>
            </Container>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));